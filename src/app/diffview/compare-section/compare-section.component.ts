import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CompareSection, Text } from '../models/compare-section.model';
import { AnimationService } from '../services/animation.service';
import {
  AddSectionInput,
  Connection,
  Connections,
  SectionClickInput,
} from './../models/diff.model';

@Component({
  selector: 'compare-section',
  templateUrl: './compare-section.component.html',
  styleUrls: ['./compare-section.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CompareSectionComponent
  implements OnInit, OnDestroy, CompareSection
{
  private startAttr!: string;
  private startPointAttr!: string;
  private endPointAttr!: string;
  private countAttr!: string;
  private className!: string;
  private divs!: Array<HTMLDivElement>;
  private scroll!: HTMLElement;
  private manualScroll: boolean = false;

  @Input() side!: string;
  @Input() text!: Text;
  @Input() connections!: Connections;

  @Output() onAddSection = new EventEmitter<AddSectionInput>();
  @Output() onClickSection = new EventEmitter<SectionClickInput>();
  @Output() onExecuteConnectionCallback = new EventEmitter<any>();

  constructor(
    private animationService: AnimationService,
    private element: ElementRef
  ) {}

  ngOnInit() {
    this.scroll = (
      (this.element.nativeElement as HTMLElement).parentElement as HTMLElement
    ).parentElement as HTMLElement;

    this.startAttr = this.side === 'left' ? 'leftStart' : 'rightStart';
    this.countAttr = this.side === 'left' ? 'leftCount' : 'rightCount';
    this.startPointAttr =
      this.side === 'left' ? 'leftStartPoint' : 'rightStartPoint';
    this.endPointAttr = this.side === 'left' ? 'leftEndPoint' : 'rightEndPoint';
    this.className =
      this.side === 'left' ? 'left-difference' : 'right-difference';

    this.onAddSection.emit({
      side: this.side,
      section: this,
    });

    this.printText(this.text);
    this.divs = [...this.element.nativeElement.querySelectorAll('div')];
    this.scroll.addEventListener('scroll', this.handleScrollEvent);
  }

  /**
   * Recalculate connection points and call callback to update connection points
   * @param  {Event} $event - The scroll event
   */
  handleScrollEvent = ($event: Event) => {
    if (!this.manualScroll) {
      this.calculateConnectionsPoints();
      this.onExecuteConnectionCallback.emit();
    }
    this.manualScroll = false;
    $event.stopPropagation();
  };

  /**
   * Recalculate connection points and execute callback to update connection points
   */
  @HostListener('window:resize')
  onResize(): void {
    this.calculateConnectionsPoints();
    this.onExecuteConnectionCallback.emit();
  }

  /**
   * Scroll to corresonding div of the other section on click of the section div
   * @param  {Event} $event - The click event
   */
  @HostListener('click', ['$event'])
  handleSectionClick($event: Event) {
    const div = this.upTo(
      $event.target as HTMLElement,
      'div'
    ) as HTMLDivElement;

    // @ts-ignore
    const elementId = [].slice.call(this.divs).indexOf(div);

    if (elementId >= 0) {
      this.calculateOffset(div, elementId);
    }
    $event.stopPropagation();
  }

  /**
   * Calculate the connection points between corresponding sections on either sections
   */
  calculateConnectionsPoints(): void {
    const scrollTop = (this.scroll as HTMLElement).scrollTop;

    this.connections &&
      this.connections.forEach((connection) => {
        this.calculateConnectionPoints(connection, scrollTop);
      });
  }

  calculateConnectionPoints(connection: Connection, minValue: number): void {
    let startElement: HTMLDivElement;
    let endElement: HTMLDivElement;

    startElement = this.divs[connection[this.startAttr]] as HTMLDivElement;
    connection[this.startPointAttr] = startElement.offsetTop - minValue;
    endElement = this.divs[
      connection[this.startAttr] + connection[this.countAttr] - 1
    ] as HTMLDivElement;
    connection[this.endPointAttr] =
      endElement.offsetTop + endElement.offsetHeight - minValue;
  }

  /**
   * Initial function to populate function by texts
   * @param {Text} textData - array with objects for every line of text that contains index and printed text
   */
  printText(textData: Text) {
    const fragment: DocumentFragment = document.createDocumentFragment();
    let divEl: HTMLDivElement;
    let spanEl: HTMLSpanElement;

    // Prepare structure '<div><span class="line-number">' + line.ind + '</span><span class="line-text">' + line.text + '</span></div>'
    divEl = document.createElement('div');
    spanEl = document.createElement('span');
    spanEl.classList.add('line-number');
    divEl.appendChild(spanEl);

    spanEl = document.createElement('span');
    spanEl.classList.add('line-text');
    divEl.appendChild(spanEl);

    // Populate div by texts
    textData.forEach((line: any) => {
      const cloneEl: any = divEl.cloneNode(true);
      cloneEl.firstElementChild.textContent = line.ind;
      cloneEl.lastElementChild.innerHTML = line.text ? line.text : '&nbsp;';
      fragment.appendChild(cloneEl);
    });

    this.addClasses(fragment.childNodes);
    this.element.nativeElement.appendChild(fragment);
  }

  /**
   * Initial function to populate text html by styles
   * It adds start-difference, end-difference, left-difference or right-difference
   * @param {HTMLElements} htmlLines - divs with html string for every line of text
   */
  addClasses(htmlLines: any) {
    this.connections &&
      this.connections.forEach((connection: Connection) => {
        const startInd = connection[this.startAttr];
        const endInd = startInd + connection[this.countAttr] - 1;
        let classList: any;

        if (connection[this.countAttr] === 1) {
          classList = (htmlLines[startInd] as HTMLElement).classList;
          classList.add('start-difference');
          classList.add('end-difference');
          classList.add(this.className);
        } else {
          classList = (htmlLines[startInd] as HTMLElement).classList;
          classList.add('start-difference');
          classList.add(this.className);

          classList = htmlLines[endInd].classList;
          classList.add('end-difference');
          classList.add(this.className);

          for (var i = 1; i <= connection[this.countAttr] - 2; i++) {
            (htmlLines[startInd + i] as HTMLElement).classList.add(
              this.className
            );
          }
        }
      });
  }

  /**
   * Function execute from the parent controller to scroll by some amount.
   * Scroll on the center of Compare Documents tells both side delta to scroll
   * @param {number} delta - scroll on interval
   */
  scrollDelta(delta: any) {
    (this.scroll.firstElementChild as HTMLElement).scrollTop += delta;
    this.manualScroll = true;
    this.calculateConnectionsPoints();
  }

  /**
   * Function execute from the parent controller to scroll.
   * Click on one side tell other side where scroll should appear. In this case animation applies
   * @param {{ delta: number} | { offset: number, connection: object, scrollTo: 'top' | 'bottom' }} data - DOM element
   */
  scrollTo(data: any) {
    let lineNumber: number;
    let div: HTMLDivElement;
    let scrollToVal: number;

    if (data.scrollTo === 'top') {
      lineNumber = data.connection[this.startAttr];
      div = this.divs[lineNumber];
      scrollToVal = div.offsetTop - data.offset;
    } else {
      lineNumber = data.connection[this.startAttr];
      div = this.divs[lineNumber];
      scrollToVal = div.offsetTop - data.offset;
    }

    // scroll with animation by steps
    this.scrollToWithAnimation(this.scroll, scrollToVal);
  }

  /**
   * Apply scroll with animation
   * @param {HTMLElement} el - DOM element
   * @param {number} to - top scroll final value
   */
  scrollToWithAnimation(el: HTMLElement, to: number) {
    var start = el.scrollTop,
      change = to - start,
      duration = 20,
      currentTime = 0,
      increment = 5;

    const animateScroll = () => {
      currentTime += increment;
      var val = this.easeInOutQuad(currentTime, start, change, duration);
      if (currentTime <= duration) {
        this.animationService.do(() => {
          this.scroll.scrollTop = val;
          this.manualScroll = true;
          this.calculateConnectionsPoints();
          this.onExecuteConnectionCallback.emit();
          animateScroll();
        });
      }
    };
    animateScroll();
  }

  /**
   * @param  {number} currentTime - current animation time
   * @param  {number} startValue - animation start time
   * @param  {number} changeInValue - value with which time is to be updated
   * @param  {number} duration - total duration of the animation
   */
  easeInOutQuad(
    currentTime: number,
    startValue: number,
    changeInValue: number,
    duration: number
  ) {
    currentTime /= duration / 2;
    if (currentTime < 1)
      return (changeInValue / 2) * currentTime * currentTime + startValue;
    currentTime--;
    return (
      (-changeInValue / 2) * (currentTime * (currentTime - 2) - 1) + startValue
    );
  }

  /**
   * Find parent tag
   * @param {HTMLElement} el - DOM element
   * @param {string} tagName - name of parent tag
   * @return HTMLElement | null
   */
  upTo(el: HTMLElement, tagName: string) {
    tagName = tagName.toLowerCase();

    if (el.tagName.toLowerCase() == tagName) return el;

    while (el && el.parentNode) {
      el = el.parentNode as HTMLElement;
      if (el.tagName && el.tagName.toLowerCase() == tagName) {
        return el;
      }
    }

    return null;
  }

  /**
   * Calculate offset where clicked block is presented
   * @param {HTMLDivElement} div - clicked div
   * @param {number} to - top scroll final value
   */
  calculateOffset(div: HTMLDivElement, elemInd: number) {
    const connection: any = this.connections.find((connection: Connection) => {
      return (
        elemInd >= connection[this.startAttr] &&
        elemInd <= connection[this.startAttr] + connection[this.countAttr] - 1
      );
    });
    const scrollOffset = this.scroll.offsetTop;
    const scrollTop = this.scroll.scrollTop;
    let divOffset;
    let scrollTo;
    let offset;

    div = connection ? this.divs[connection[this.startAttr]] : div;
    divOffset = div.offsetTop;
    if (divOffset >= scrollOffset + scrollTop) {
      scrollTo = 'top';
      offset = divOffset - scrollTop;
    } else {
      div = connection
        ? this.divs[connection[this.startAttr] + connection[this.countAttr] - 1]
        : div;
      scrollTo = 'bottom';
      offset = divOffset + div.offsetHeight - scrollTop;
    }

    this.onClickSection.emit({
      connection: connection,
      elemInd: elemInd,
      side: this.side,
      scrollTo: scrollTo,
      offset: offset,
    });
  }

  ngOnDestroy(): void {
    this.scroll.removeEventListener('scroll', this.handleScrollEvent, false);
  }
}

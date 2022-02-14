import { DiffService } from '../diff.service';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { AnimationService } from '../services/animation.service';
import * as _ from 'lodash';

@Component({
  selector: 'compare-section',
  templateUrl: './compare-section.component.html',
  styleUrls: ['./compare-section.component.css'],
})
export class CompareSectionComponent implements OnInit {
  @Input() side!: string;
  @Input() text!: any;
  @Input() connections!: any;

  private startAttr: string;
  private startPointAttr =
    this.side === 'left' ? 'leftStartPoint' : 'rightStartPoint';
  private endPointAttr =
    this.side === 'left' ? 'leftEndPoint' : 'rightEndPoint';
  private countAttr: string;
  private className =
    this.side === 'left' ? 'left-difference' : 'right-difference';

  private divs!: Array<HTMLDivElement>;
  private scroll!: HTMLElement;
  // private windowEl = window;
  private calculateFirstConnectionPointsWatcher;
  private recalculationInQueue = false;
  private manualScroll = false;

  @Output() onAddSection = new EventEmitter<any>();

  constructor(
    private animationService: AnimationService,
    private diffService: DiffService,
    private element: ElementRef
  ) {}

  ngOnInit() {
    this.scroll = (this.element.nativeElement as HTMLElement).parentElement;

    this.startAttr = this.side === 'left' ? 'leftStart' : 'rightStart';
    this.countAttr = this.side === 'left' ? 'leftCount' : 'rightCount';

    // populate text as HTML divs
    this.printText(this.text);

    this.divs = [...this.element.nativeElement.getElementsByTagName('div')];

    this.onAddSection.emit({
      side: this.side,
      section: this,
    });
  }

  calculateConnectionsPoints() {
    const scrollTop = (this.scroll.firstChild as HTMLElement).scrollTop;

    this.connections &&
      _.forEach(this.connections, (connection) => {
        this.calculateConnectionPoints(connection, scrollTop);
      });
  }

  calculateConnectionPoints(connection, minValue) {
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
   * @param {array} textData - array with objects for every line of text that contains index and printed text
   */
  printText(textData) {
    const fragment = document.createDocumentFragment();
    let divEl;
    let spanEl;

    // Prepare structure '<div><span class="line-number">' + line.ind + '</span><span class="line-text">' + line.text + '</span></div>'
    divEl = document.createElement('div');
    spanEl = document.createElement('span');
    spanEl.classList.add('line-number');
    divEl.appendChild(spanEl);

    spanEl = document.createElement('span');
    spanEl.classList.add('line-text');
    divEl.appendChild(spanEl);

    // Populate div by texts
    _.forEach(textData, function (line) {
      var cloneEl = divEl.cloneNode(true);
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
  addClasses(htmlLines) {
    _.forEach(this.connections, (connection) => {
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
}

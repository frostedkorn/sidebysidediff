import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { SvgService } from '../services/svg.service';
import { Connection } from './../models/diff.model';

@Component({
  selector: 'compare-links',
  templateUrl: './compare-links.component.html',
  styleUrls: ['./compare-links.component.css'],
  providers: [SvgService],
})
export class CompareLinksComponent implements OnInit {
  private containerWidth: number = 80;
  private endWidth: number = 10;
  private lineWidth: number = 3;
  private svgContainer!: SVGElement;
  private gradientName: string = 'linearGradient';

  @Input() colorSeparationLine: string = '#333333';
  @Input() colorLeftBlock: string = '#ffb6ba';
  @Input() colorRightBlock: string = '#97f295';
  @Input() connections!: any;

  @Output() onAddConnectionCallback = new EventEmitter<any>();

  /**
   * @constructor
   * @param  {SvgService} svgService - Service to generate svg elements
   * @param  {ElementRef} element - Reference to the current element
   */
  constructor(private svgService: SvgService, private element: ElementRef) {}

  ngOnInit() {
    this.svgContainer = this.svgService.createElement('svg', {
      width: this.containerWidth,
      height: '100%',
    });

    (this.element.nativeElement as HTMLElement).appendChild(this.svgContainer);

    this.onAddConnectionCallback.emit(this.drawConnection.bind(this));
  }

  /**
   * Draw connections taking receiving array of connections
   * @param {Arary<any>} connections - array of connections with start and end points
   */
  drawConnection(connections: Array<any>): void {
    let isConnectionPopulated: any;
    const fragment = document.createDocumentFragment();
    let height = this.element.nativeElement.firstChild.clientHeight;

    this.clearContainer();
    this.createVerticalLine(fragment, height);
    this.createGradient(fragment, this.colorLeftBlock, this.colorRightBlock);

    isConnectionPopulated = connections && connections[0];
    isConnectionPopulated =
      isConnectionPopulated &&
      typeof connections[0].leftStartPoint === 'number';
    isConnectionPopulated =
      isConnectionPopulated &&
      typeof connections[0].rightStartPoint === 'number';

    if (isConnectionPopulated) {
      connections.forEach((connection: Connection) => {
        var leftBlockVisible =
          (connection.leftStartPoint >= 0 &&
            connection.leftStartPoint <= height) ||
          (connection.leftEndPoint >= 0 && connection.leftEndPoint <= height);
        var rightBlockVisible =
          (connection.rightStartPoint >= 0 &&
            connection.rightStartPoint <= height) ||
          (connection.rightEndPoint >= 0 && connection.rightEndPoint <= height);

        if (leftBlockVisible || rightBlockVisible) {
          this.createEnds(
            fragment,
            connection.leftStartPoint,
            connection.leftEndPoint,
            0,
            this.endWidth,
            this.colorLeftBlock
          );
          this.createEnds(
            fragment,
            connection.rightStartPoint,
            connection.rightEndPoint,
            this.containerWidth,
            this.containerWidth - this.endWidth,
            this.colorRightBlock
          );
          this.createConnection(
            fragment,
            connection.leftStartPoint,
            connection.leftEndPoint,
            this.endWidth,
            connection.rightStartPoint,
            connection.rightEndPoint,
            this.containerWidth - this.endWidth
          );
          this.svgContainer.appendChild(fragment);
        }
      });
    }
  }

  /**
   * Clear container before drawing anything else
   */
  clearContainer(): void {
    while (this.svgContainer.firstChild) {
      this.svgContainer.removeChild(this.svgContainer.firstChild);
    }
  }

  /**
   * Create vertical line between left and right blocks
   * @param {DocumentFragment} fragment - element that combine all drawing elements
   * @param {number} height - height of svg block and right and left blocks
   */
  createVerticalLine(fragment: DocumentFragment, height: number): void {
    let line = this.svgService.createElement('path', {
      d: this.svgService
        .startPath()
        .moveTo(this.containerWidth / 2, 0)
        .lineTo(this.containerWidth / 2, height)
        .buildPath(),
      stroke: this.colorSeparationLine,
      'stroke-width': 1,
    });
    fragment.appendChild(line);
  }

  /**
   * Create linear gradient of different colors on left and right side combining by gradient
   * @param {DocumentFragment} fragment - element that combine all drawing elements
   * @param {string} color1 - color on the left side
   * @param {string} color2 - color on the right side
   */
  createGradient(
    fragment: DocumentFragment,
    color1: string,
    color2: string
  ): void {
    let stops = [
      {
        offset: 0,
        'stop-color': color1,
      },
      {
        offset: 0.3,
        'stop-color': color1,
      },
      {
        offset: 0.7,
        'stop-color': color2,
      },
      {
        offset: 1,
        'stop-color': color2,
      },
    ];
    let gradient: SVGElement;

    gradient = this.svgService.createElement('linearGradient', {
      id: 'linearGradient',
    });

    stops.map((stopAttr: any) => {
      var stopEl = this.svgService.createElement('stop', stopAttr);
      gradient.appendChild(stopEl);
    });

    fragment.appendChild(gradient);
  }

  /**
   * Create curvy lines near the left or right block that presents difference
   * @param {HTMLElement} fragment - element that combine all drawing elements
   * @param {number} startY - Y of block start
   * @param {number} endY - Y of block end
   * @param {number} startX - X start point of path
   * @param {number} endX - X end point of path
   * @param {string} color - color of path
   */
  createEnds(
    fragment: DocumentFragment,
    startY: number,
    endY: number,
    startX: number,
    endX: number,
    color: string
  ) {
    let path;
    let pathEl;
    let x1 = startX;
    let x2 = (startX + endX) / 2;
    let x3 = endX;
    let y1 = startY + 2;
    let y2 = (startY + endY) / 2;
    let y3 = endY - 2;

    path = this.svgService
      .startPath()
      .moveTo(x1, y1)
      .curve(x2, y1, x2, y2, x3, y2)
      .curve(x2, y2, x2, y3, x1, y3)
      .buildPath();

    pathEl = this.svgService.createElement('path', {
      d: path,
      stroke: color,
      'stroke-width': this.lineWidth,
      fill: 'none',
    });

    fragment.appendChild(pathEl);
  }

  /**
   * Create curvy line between left and right part
   * @param {HTMLElement} fragment - element that combine all drawing elements
   * @param {number} start1 - Y of block start on the left side
   * @param {number} end1 - Y of block end on the left side
   * @param {number} xStart - X starting point on the left side
   * @param {number} start2 - Y of block start on the right side
   * @param {number} end2 - Y of block end on the right side
   * @param {number} xEnd - X ending point on the right side
   */
  createConnection(
    fragment: any,
    start1: number,
    end1: number,
    xStart: number,
    start2: number,
    end2: number,
    xEnd: number
  ): void {
    let pathEl: SVGElement;

    if (start1 + end1 !== start2 + end2) {
      // 2 curve lines if it is not straight horizontal line
      pathEl = this.createCurvyLine(start1, end1, xStart, start2, end2, xEnd);
    } else {
      // Draw rectangle because horizont line is not working with gradiet
      pathEl = this.createStraightLine(start1, end1, xStart, xEnd);
    }

    fragment.appendChild(pathEl);
  }

  /**
   * Create straight line with gradient
   * @param {number} start - Y of block start on the left side
   * @param {number} end - Y of block end on the left side
   * @param {number} xStart - X starting point on the left side
   * @param {number} xEnd - X ending point on the right side
   * @return {SVGElement} rectangle element to present straight line
   */
  createStraightLine(
    start: number,
    end: number,
    xStart: number,
    xEnd: number
  ): SVGElement {
    return this.svgService.createElement('rect', {
      width: xEnd - xStart,
      height: this.lineWidth,
      x: xStart,
      y: (start + end) / 2 - this.lineWidth / 2,
      fill: 'url(#' + this.gradientName + ')',
    });
  }

  /**
   * Create curly line with gradient
   * @param {number} start1 - Y of block start on the left side
   * @param {number} end1 - Y of block end on the left side
   * @param {number} xStart - X starting point on the left side
   * @param {number} start2 - Y of block start on the right side
   * @param {number} end2 - Y of block end on the right side
   * @param {number} xEnd - X ending point on the right side
   * @return {SVGElement} path element to present curly line
   */
  createCurvyLine(
    start1: number,
    end1: number,
    xStart: number,
    start2: number,
    end2: number,
    xEnd: number
  ): SVGElement {
    let path: string;
    let x1 = xStart;
    let x2 = (xStart + xEnd) / 4;
    let x3 = (xStart + xEnd) / 2;
    let x4 = (3 * (xStart + xEnd)) / 4;
    let x5 = xEnd;
    let y1 = (start1 + end1) / 2;
    let y2 = (start1 + end1 + start2 + end2) / 4;
    let y3 = (start2 + end2) / 2;

    path = this.svgService
      .startPath()
      .moveTo(x1, y1)
      .curve(x2, y1, x3, y1, x3, y2)
      .curve(x3, y3, x4, y3, x5, y3)
      .buildPath();

    return this.svgService.createElement('path', {
      d: path,
      stroke: 'url(#' + this.gradientName + ')',
      'stroke-width': this.lineWidth,
      fill: 'none',
    });
  }
}

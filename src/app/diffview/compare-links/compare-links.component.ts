import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import * as _ from 'lodash';
import { SvgService } from '../services/svg.service';

@Component({
  selector: 'compare-links',
  templateUrl: './compare-links.component.html',
  styleUrls: ['./compare-links.component.css'],
  providers: [SvgService],
})
export class CompareLinksComponent implements OnInit, AfterViewInit {
  private containerWidth = 80;
  private endWidth = 10;
  private lineWidth = 3;
  private gradientName = 'linearGradient';
  private colorSeparationLine = '#333333';
  private colorLeftBlock = '#ffb6ba';
  private colorRightBlock = '#97f295';
  private svgContainer!: any;

  @Output() onAddConnectionCallback = new EventEmitter<any>();

  constructor(private svgService: SvgService, private element: ElementRef) {}

  ngOnInit() {
    this.svgContainer = this.svgService.createElement('svg', {
      width: this.containerWidth,
      height: '100%',
    });
    (this.element.nativeElement as HTMLElement).appendChild(this.svgContainer);
    this.onAddConnectionCallback.emit({
      fn: this.drawConnection,
      container: this,
    });
  }

  ngAfterViewInit() {}

  /**
   * Draw connections taking receiving array of connections
   * @param {array} connections - array of connections with start and end points
   */
  drawConnection(connections) {
    let isConnectionPopulated: any;

    console.log('asdfadsf: ', this.element);

    let height = (this.element.nativeElement.firstElementChild as HTMLElement)
      .offsetHeight;
    let fragment = document.createDocumentFragment();

    console.log('height', height);

    this.clearContainer();
    this.createVerticalLine(fragment, height);
    this.createGradient(fragment, this.colorLeftBlock, this.colorRightBlock);

    // Connect differences between left and right sides
    isConnectionPopulated = connections && connections[0];
    isConnectionPopulated =
      isConnectionPopulated &&
      typeof connections[0].leftStartPoint === 'number';
    isConnectionPopulated =
      isConnectionPopulated &&
      typeof connections[0].rightStartPoint === 'number';

    if (isConnectionPopulated) {
      _.forEach(connections, function (connection) {
        // If block is visible
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
        }
      });
    }
  }

  /**
   * Clear container before drawing anything else
   */
  clearContainer() {
    while (this.svgContainer.firstChild) {
      this.svgContainer.removeChild(this.svgContainer.firstChild);
    }
  }

  /**
   * Create vertical line between left and right blocks
   * @param {HTMLElement} fragment - element that combine all drawing elements
   * @param {number} height - height of svg block and right and left blocks
   */
  createVerticalLine(fragment, height) {
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
   * @param {HTMLElement} fragment - element that combine all drawing elements
   * @param {string} color1 - color on the left side
   * @param {string} color2 - color on the right side
   */
  createGradient(fragment, color1, color2) {
    var stops = [
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
      ],
      gradient;

    gradient = this.svgService.createElement('linearGradient', {
      id: 'linearGradient',
    });

    _.map(stops, (stopAttr) => {
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
  createEnds(fragment, startY, endY, startX, endX, color) {
    var path,
      pathEl,
      x1 = startX,
      x2 = (startX + endX) / 2,
      x3 = endX,
      y1 = startY + 2,
      y2 = (startY + endY) / 2,
      y3 = endY - 2;

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
  createConnection(fragment, start1, end1, xStart, start2, end2, xEnd) {
    var pathEl;

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
   * @return {SvgElement} rectangle element to present straight line
   */
  createStraightLine(start, end, xStart, xEnd) {
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
   * @return {SvgElement} path element to present curly line
   */
  createCurvyLine(start1, end1, xStart, start2, end2, xEnd) {
    var path,
      pathEl,
      x1 = xStart,
      x2 = (xStart + xEnd) / 4,
      x3 = (xStart + xEnd) / 2,
      x4 = (3 * (xStart + xEnd)) / 4,
      x5 = xEnd,
      y1 = (start1 + end1) / 2,
      y2 = (start1 + end1 + start2 + end2) / 4,
      y3 = (start2 + end2) / 2;

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

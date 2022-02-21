import { Injectable } from '@angular/core';

@Injectable()
export class SvgService {
  private svgNS = 'http://www.w3.org/2000/svg';
  private _buffer!: Array<any>;

  /**
   * Creates a svg element with the namespace
   * @constructor
   * @param  {string} elementName - the name of the element to be created
   * @param  {any} attributes - attributes list for the element
   */
  createElement(elementName: string, attributes: any) {
    var svgElement = document.createElementNS(
      this.svgNS,
      elementName
    ) as SVGElement;

    Object.entries(attributes).forEach(([key, value]: [string, any]) => {
      svgElement.setAttribute(key, value);
    });

    return svgElement;
  }

  // flush the buffer
  startPath() {
    this._buffer = [];
    return this;
  }

  moveTo(x: number, y: number) {
    this._buffer.push('M', x, y);
    return this;
  }

  // push curve path to the buffer
  curve(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    endX: number,
    endY: number
  ) {
    this._buffer.push('C', x1, y1, x2, y2, endX, endY);
    return this;
  }

  // push line path to the buffer
  lineTo(x: number, y: number) {
    this._buffer.push('L', x, y);
    return this;
  }

  // close the path
  close() {
    this._buffer.push('Z');
    return this;
  }

  // return string representation of the path
  buildPath() {
    const result = this._buffer.join(' ');
    return result;
  }
}

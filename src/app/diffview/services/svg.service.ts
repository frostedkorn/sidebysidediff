import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  private svgNS = 'http://www.w3.org/2000/svg';
  private _buffer;

  createElement(elementName, attributes) {
    var svgElement = document.createElementNS(this.svgNS, elementName);
    attributes.forEach(function (value, key) {
      svgElement.setAttribute(key, value);
    });
    return svgElement;
  }

  startPath() {
    this._buffer = [];
    return this;
  }

  moveTo(x: number, y: number) {
    this._buffer.push('M', x, y);
    return this;
  }

  curve(x1, y1, x2, y2, endX, endY) {
    this._buffer.push('C', x1, y1, x2, y2, endX, endY);
    return this._buffer;
  }

  lineTo(x, y) {
    this._buffer.push('L', x, y);
    return this;
  }

  close() {
    this._buffer.push('Z');
    return this;
  }

  buildPath() {
    var result = this._buffer.join(' ');
    return result;
  }
}

import * as _ from 'lodash';

import { Injectable } from '@angular/core';
import { CompareLinksComponent } from '../compare-links/compare-links.component';

@Injectable({ providedIn: CompareLinksComponent })
export class SvgService {
  private svgNS = 'http://www.w3.org/2000/svg';
  private _buffer;

  createElement(elementName, attributes) {
    var svgElement = document.createElementNS(this.svgNS, elementName);
    _.forEach(attributes || {}, function (value, key) {
      svgElement.setAttribute(key, value);
    });
    return svgElement;
  }

  startPath() {
    this._buffer = [];
    return this;
  }

  moveTo(x, y) {
    this._buffer.push('M', x, y);
    return this;
  }

  curve(x1, y1, x2, y2, endX, endY) {
    this._buffer.push('C', x1, y1, x2, y2, endX, endY);
    return this;
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

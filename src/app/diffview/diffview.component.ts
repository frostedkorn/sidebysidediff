import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { AnimationService } from './services/animation.service';
import { DiffService } from './diff.service';

@Component({
  selector: 'diff-view',
  templateUrl: './diffview.component.html',
  styleUrls: ['./diffview.component.css'],
})
export class DiffViewComponent implements OnInit {
  private sections = {};
  private connections!: any;
  private connectionCallback = _.noop;
  private loader = true;
  public diff: any;
  public score: any;
  public leftText: any;
  public rightText: any;

  constructor(
    private animationService: AnimationService,
    private diffService: DiffService
  ) {}

  ngOnInit() {
    const data = this.diffService.getFormComparison(
      { FormNumber: 'test', IsIsoForm: false },
      { FormNumber: 'test1', IsIsoForm: false }
    );

    this.diff = data.diff;
    if (!this.diff) {
      console.log('no any comparison results found');
    } else {
      this.score = Math.floor(data.score * 100);
      this.leftText = this.diffService.prepareTexts(this.diff, 'left');
      this.rightText = this.diffService.prepareTexts(this.diff, 'right');
      this.connections = this.diffService.prepareConnection(this.diff);

      // Draw initial connections
      this.sections &&
        this.animationService.do(() => {
          _.forEach(this.sections, function (section: any) {
            section.calculateConnectionsPoints();
          });
          this.executeConnectionCallback();
        });
    }
  }

  /**
   * Add left or right sections
   * @param {string} side - left or right
   * @param {Directive} section - scope of section directive
   */
  public addSection(event: any) {
    const side = event.side;
    const section = event.section;

    this.sections[side] = section;
  }

  /**
   * Get connections object
   */
  getConnections() {
    return this.connections;
  }
  /**
   * Scroll other section on click one of the section element
   * @param {object} data - info about clicked line:
   *     line - what side click what produced
   *     elemInd - line id
   *     scrollTo - calculated
   *     conection - connection for clicked line, block
   */
  clickSection(data) {
    // Take opposite section
    let section = _.find(this.sections, function (section) {
      return section !== this.sections[data.side];
    });

    // If connection line was not found init text is fully similar or don't exist in the other section
    if (!data.connection) {
      let lineAttr = data.side === 'left' ? 'left_line' : 'right_line',
        connection = _.find(this.diff, function (line) {
          return line[lineAttr] === data.elemInd + 1;
        });

      data.connection = {
        leftStart: connection.left_line && connection.left_line - 1,
        rightStart: connection.right_line && connection.right_line - 1,
        leftCount: 1,
        rightCount: 1,
      };
    }

    // Do scroll if line is the similar or was changed
    (section as any).scrollTo({
      connection: data.connection,
      scrollTo: data.scrollTo,
      offset: data.offset,
    });
  }

  /**
   * Add function that would be executed when connections are changed
   * This function would redraw links between sections
   * @param {Function} fn - function from Compare Links directive that redraw connection between sections
   */
  addConnectionCallback({ fn, container }) {
    this.connectionCallback = fn.bind(container);
  }

  /**
   * Execute connection callback.
   * Called from section directive when connections are changed
   * @param {array} connections - connections with updated coordinates after scrolling
   */
  executeConnectionCallback() {
    this.connectionCallback(this.connections);
    this.loader = false;
  }

  /**
   * Scroll left and right sections synchronous
   * Execute on mousewheel event in the link area
   * @param {Event} ev - mousewheel event
   */
  scrollSections(ev) {
    if (Object.keys(this.sections).length === 0) return;

    // deltaY is used in Chrome
    // wheelDelta - IE
    let delta = ev.deltaY || (-1 / 10) * ev.wheelDelta * 10;
    this.animationService.do(function () {
      _.forEach(this.sections, function (section) {
        section.scrollDelta(delta);
      });
      this.executeConnectionCallback();
    });
  }
}

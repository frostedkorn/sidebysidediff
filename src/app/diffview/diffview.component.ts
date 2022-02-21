import { Component, Input, OnInit } from '@angular/core';
import { DiffService } from './diff.service';
import { AddSectionInput } from './models/diff.model';
import { AnimationService } from './services/animation.service';

@Component({
  selector: 'diff-view',
  templateUrl: './diffview.component.html',
  styleUrls: ['./diffview.component.css'],
})
export class DiffViewComponent implements OnInit {
  private sections: any = {};
  private connections!: any;
  private connectionCallback = (args: any) => {};
  private loader = true;
  public diff: any;
  public score: any;
  public leftText: any;
  public rightText: any;

  @Input() colorSeparationLine: string = '#333333';
  @Input() colorLeftBlock: string = '#ffb6ba';
  @Input() colorRightBlock: string = '#97f295';

  constructor(
    private animationService: AnimationService,
    private diffService: DiffService
  ) {}

  ngOnInit() {
    const data = this.diffService.getFormComparison(
      { FormNumber: 'test', IsISOForm: false },
      { FormNumber: 'test1', IsISOForm: false }
    );

    this.diff = data.diff;
    if (!this.diff) {
    } else {
      this.score = Math.floor(data.score * 100);
      this.leftText = this.diffService.prepareTexts(this.diff, 'left');
      this.rightText = this.diffService.prepareTexts(this.diff, 'right');
      this.connections = this.diffService.prepareConnection(this.diff);

      // Draw initial connections
      this.sections &&
        this.animationService.do(() => {
          Object.entries(this.sections).forEach(function ([
            sectionKey,
            section,
          ]: [string, any]) {
            section.calculateConnectionsPoints();
          });
          this.executeConnectionCallback();
        });
    }
  }

  /**
   * Add left or right sections
   * @param {string} side - left or right
   * @param {Component} section - scope of the section component
   */
  public addSection(event: AddSectionInput) {
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
  clickSection(data: any) {
    // Take opposite section
    let section = (
      Object.entries(this.sections).find(([side, section]: [string, any]) => {
        return section !== this.sections[data.side];
      }) as Array<any>
    )[1];

    // If connection line was not found init text is fully similar or don't exist in the other section
    if (!data.connection) {
      let lineAttr = data.side === 'left' ? 'left_line' : 'right_line';
      let connection = this.diff.find((line: any) => {
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
  addConnectionCallback(fn: any) {
    this.connectionCallback = fn;
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
  scrollSections(ev: any) {
    if (Object.keys(this.sections).length === 0) return;

    let delta = ev.deltaY;
    this.animationService.do(() => {
      this.sections.forEach((section: any) => {
        section.scrollDelta(delta);
      });
      this.executeConnectionCallback();
    });
  }
}

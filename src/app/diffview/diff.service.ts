import * as _ from 'lodash';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { diff_match_patch } from 'diff-match-patch';
import { MockService } from './services/mock.service';

@Injectable()
export class DiffService {
  private diffObj!: any;
  private comparisonResult: any = {};

  constructor(private http: HttpClient, private mockService: MockService) {
    this.diffObj = new diff_match_patch();
  }

  getFormComparison(form1, form2, newRequest?: any) {
    // Take the result from the previous request
    if (
      !newRequest &&
      this.comparisonResult.form1 &&
      this.comparisonResult.form1.FormNumber === form1.FormNumber &&
      this.comparisonResult.form1.IsISOForm === form1.IsISOForm &&
      this.comparisonResult.form2 &&
      this.comparisonResult.form2.FormNumber === form2.FormNumber &&
      this.comparisonResult.form2.IsISOForm === form2.IsISOForm
    ) {
      return this.comparisonResult.data;
    }

    var payload = {
      leftForm: { FormNumber: form1.FormNumber, IsIsoForm: form1.IsISOForm },
      rightForm: { FormNumber: form2.FormNumber, IsIsoForm: form2.IsISOForm },
    };

    return this.parseResponse(this.mockService.getMockDiff());

    // return this.http
    //   .post(
    //     'https://ratingapit-internal-forms-analytics-difference.iso.com/api/FormAnalyticsApi/GetDiff',
    //     {
    //       payload,
    //     }
    //   )
    //   .pipe(
    //     map((res: any) => {
    //       const resDataMock = this.mockService.getMockDiff();

    //       // TODO: replace with mock.data in the parseResponse call
    //       const result = this.parseResponse(resDataMock);
    //       this.comparisonResult = {
    //         form1: form1,
    //         form2: form2,
    //         data: result,
    //       };

    //       return result;
    //     }),
    //     catchError(() => of([]))
    //   );
  }

  parseResponse(data) {
    if (data && data.diff) {
      _.forEach(data.diff, (line) => {
        line.left_line = line.left_line ? parseInt(line.left_line, 10) : null;
        line.right_line = line.right_line
          ? parseInt(line.right_line, 10)
          : null;
      });
    }
    return data;
  }

  prepareTexts(diff, side) {
    const textAttr = side === 'left' ? 'left_text' : 'right_text';
    const lineAttr = side === 'left' ? 'left_line' : 'right_line';

    const filterTxt =
      side === 'left'
        ? function (lineDiff) {
            return lineDiff[0] <= 0;
          }
        : function (lineDiff) {
            return lineDiff[0] >= 0;
          };

    return diff
      .filter((line) => {
        return line[lineAttr];
      })
      .sort((line1, line2) => {
        return this.sortFn(line1, line2, lineAttr);
      })
      .map((line) => {
        return {
          ind: line[lineAttr],
          text: this.getText(line, filterTxt),
        };
      });
  }

  prepareConnection(diff) {
    let drawArray = [];
    let checkFirstLines = true;
    let leftDiffs: Array<any>;
    let rightDiffs: Array<any>;
    let leftInd: number;

    leftDiffs = diff
      .filter((line) => line.left_line)
      .sort((line1, line2) => {
        return this.sortFn(line1, line2, 'left_line');
      });

    for (var i = 0; i < leftDiffs.length; ++i) {
      if (
        leftDiffs[i].left_line !== null &&
        leftDiffs[i].right_line !== null &&
        leftDiffs[i].left_text !== leftDiffs[i].right_text
      ) {
        if (
          drawArray[drawArray.length - 1] &&
          drawArray[drawArray.length - 1].leftStart +
            drawArray[drawArray.length - 1].leftCount ===
            leftDiffs[i].left_line - 1 &&
          drawArray[drawArray.length - 1].rightStart +
            drawArray[drawArray.length - 1].rightCount ===
            leftDiffs[i].right_line - 1
        ) {
          ++drawArray[drawArray.length - 1].leftCount;
          ++drawArray[drawArray.length - 1].rightCount;
        } else {
          drawArray.push(
            this.newElementForArray(
              leftDiffs[i].left_line - 1,
              leftDiffs[i].right_line - 1,
              1,
              1,
              true
            )
          );
        }
      }
    }
    return drawArray;
  }

  newElementForArray(leftInd, rightInd, leftCount, rightCount, edit) {
    return {
      leftStart: leftInd,
      rightStart: rightInd,
      leftCount: leftCount,
      rightCount: rightCount,
      edit: edit,
    };
  }

  sortFn(val1, val2, attr) {
    return val1[attr] - val2[attr];
  }

  getText(line, diffSideFilter) {
    var diffs = this.diffObj.diff_main(line.left_text, line.right_text);
    this.diffObj.diff_cleanupSemantic(diffs);
    diffs = diffs.filter(diffSideFilter);
    return this.diffObj.diff_prettyHtml(diffs);
  }
}

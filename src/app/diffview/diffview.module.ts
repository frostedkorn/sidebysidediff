import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { CompareLinksComponent } from './compare-links/compare-links.component';
import { CompareSectionComponent } from './compare-section/compare-section.component';
import { DiffService } from './diff.service';
import { DiffViewComponent } from './diffview.component';
import { AnimationService } from './services/animation.service';
import { MockService } from './services/mock.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, NgScrollbarModule],
  declarations: [
    CompareLinksComponent,
    CompareSectionComponent,
    DiffViewComponent,
  ],
  exports: [DiffViewComponent],
  providers: [
    AnimationService,
    DiffService,
    MockService,
    {
      provide: Window,
      useValue: window,
    },
  ],
})
export class DiffviewModule {}

import { Injectable } from '@angular/core';

@Injectable()
export class AnimationService {
  private requestAnimationFrame = window.requestAnimationFrame;

  private cancelAnimationFrame = window.cancelAnimationFrame;

  private currentAnimationRequest!: any;

  constructor() {}

  /**
   * Request animation frame to update coordinates for connections
   * @param {Function} callback - function from directive what to do in new animation frame
   */
  do(callback: any) {
    this.currentAnimationRequest &&
      this.cancelAnimationFrame(this.currentAnimationRequest);
    this.currentAnimationRequest = this.requestAnimationFrame(function () {
      callback();
    });
  }
}

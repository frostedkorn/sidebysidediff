export interface CompareSection {
  handleScrollEvent($event: any): void;
  onResize(): void;
}

export type Text = TextUnit[];

export interface TextUnit extends Record<string, any> {
  ind: number;
  text: string;
}

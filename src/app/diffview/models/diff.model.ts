export type Connections = Array<Connection>;

export interface Connection extends Record<string, any> {
  leftStart: number;
  rightStart: number;
  leftCount: number;
  rightCount: number;
  edit: boolean;
  leftStartPoint: number;
  leftEndPoint: number;
  rightStartPoint: number;
  rightEndPoint: number;
}

export interface AddSectionInput {
  side: any;
  section: any;
}

export interface SectionClickInput {
  connection: Connection;
  elemInd: number;
  side: string;
  scrollTo: string;
  offset: number;
}

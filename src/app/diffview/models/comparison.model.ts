import { Form } from './form.model';

export interface ComparisonResult {
  form1: Form;
  form2: Form;
  data: DiffResponse;
}

export interface DiffResponse {
  left_doc_client_id: string;
  left_form_number: string;
  right_doc_client_id: string;
  right_form_number: string;
  diff: Diff[];
  saved_at: string;
  score: number;
  left_form_metadata: LeftFormMetadata;
  right_form_metadata: RightFormMetadata;
}

export interface Diff {
  left_line?: number;
  left_text: string;
  right_line?: number;
  right_text: string;
}

export interface LeftFormMetadata {
  title: string;
  displayFormNumber: string;
  client_id: string;
  formLobType: string;
  formNumber: string;
  formsType: string;
  formStatus: string;
  uri: string;
  cc_library: string;
  doc_id: string;
}

export interface RightFormMetadata {
  formsType: string;
  cc_library: string;
  title: string;
  displayFormNumber: string;
  uri: string;
  doc_id: string;
  client_id: string;
  formLobType: string;
  formNumber: string;
  formStatus: string;
}

import { Issue, IssueStatus } from '../models';

export interface CreateIssueRequest {
  readonly category: string;
  readonly type: string;
  readonly severity: number; // 1-5
  readonly title: string;
  readonly description: string;
  readonly deduplicationToken: string;
}

export interface CreateIssueResponse {
  readonly issueId: string;
}

export interface UpdateIssueStatusRequest {
  readonly issueId: string;
  readonly status: IssueStatus;
}

export interface UpdateIssueStatusResponse {}

export type ListIssuesSort = 'asc' | 'dec';

export const LIST_ISSUES_SORTS: ReadonlyArray<ListIssuesSort> = ['asc', 'dec'];

export interface ListIssuesRequest {
  readonly status: IssueStatus;
  // updated time.
  readonly from: number;
  readonly limit: number;
  readonly sort: ListIssuesSort;
}

export interface ListIssuesResponse {
  readonly issues: Issue[];
}

export interface GetIssueRequest {
  readonly issueId: string;
}

export interface GetIssueResponse {
  readonly issue: Issue;
}

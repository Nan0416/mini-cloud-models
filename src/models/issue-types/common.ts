export type IssueStatus = 'new' | 'work-in-process' | 'resolved';

export const ISSUE_STATUSES: ReadonlyArray<IssueStatus> = ['new', 'work-in-process', 'resolved'];

export type Severity = 1 | 2 | 3 | 4 | 5;

export const SEVERITIES: ReadonlyArray<Severity> = [1, 2, 3, 4, 5];

export interface Issue {
  readonly issueId: string;
  readonly status: IssueStatus;
  readonly category: string;
  readonly type: string;
  readonly severity: Severity;
  readonly title: string;
  readonly description: string;
  readonly createdAt: number;
  readonly lastUpdatedAt: number;
}

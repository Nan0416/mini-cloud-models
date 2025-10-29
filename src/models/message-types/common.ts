export interface MessageHubStatus {
  readonly totalSubscriberCount: number;
  readonly topicToSubscriberCount: Record<string, number>;
}

export interface PublishTimestamp {
  readonly _publishedAt: number;
}

export interface ForwardTimestamp {
  readonly _forwardedAt: number;
}

export interface SenderIdentifier {
  readonly _senderId?: string;
}

export type CommunicationMethod = 'broadcast' | 'p2p';

export const COMMUNICATION_METHODS: ReadonlyArray<CommunicationMethod> = ['broadcast', 'p2p'];

export interface Target {
  readonly method: CommunicationMethod;
  readonly to: string; // topic or subscriberId;
}

import { EnvironmentVariables, HealthCheck } from '..';

/**
 * Internal* requests and responses are for the communication between task service and task agent.
 *
 * Public can't directly send requests to the task agent.
 */
export interface InternalLaunchTaskInstanceRequest {
  readonly taskId: string;
  readonly version: number;
  readonly taskInstanceId: string;
  readonly cmd: string; // support ${keyword} replacement
  readonly cwd: string;
  readonly arguments?: string[];
  readonly env?: EnvironmentVariables;
  readonly stdout?: string;
  readonly stderr?: string;
  readonly healthCheck?: HealthCheck;
}

export interface InternalLaunchTaskInstanceResponse {}

export interface InternalTerminateTaskInstanceRequest {
  readonly taskInstanceId: string;
  readonly pid: number;
}

export interface InternalTerminateTaskInstanceResponse {}

export interface InternalTerminateAgentRequest {}

export interface InternalTerminateAgentResponse {}

export interface InternalGetAgentStatusRequest {}

export interface InternalGetAgentStatusResponse {}

/**
 * The interface is used by task service to issue instructions to task agents.
 *
 * For now, the implementation is based on pub-sub. The task service will broadcast the request to a topic.
 */
export interface TaskAgentClient {
  launchTaskInstance(request: InternalLaunchTaskInstanceRequest): Promise<InternalLaunchTaskInstanceResponse>;

  terminateTaskInstance(request: InternalTerminateTaskInstanceRequest): Promise<InternalTerminateTaskInstanceResponse>;

  terminateAgent(request: InternalTerminateAgentRequest): Promise<InternalTerminateAgentResponse>;

  /**
   * @param agentId if undefined, then request all
   */
  getAgentStatus(request: InternalGetAgentStatusRequest): Promise<InternalGetAgentStatusResponse>;
}

/**
 * Event models sent over websocket.
 */
export interface LaunchTaskInstanceEvent {
  readonly type: 'launch-task-instance';
  readonly agentId: string;
  readonly request: InternalLaunchTaskInstanceRequest;
}

export interface TerminateTaskInstanceEvent {
  readonly type: 'terminate-task-instance';
  readonly agentId: string;
  readonly request: InternalTerminateTaskInstanceRequest;
}

export interface TerminateAgentEvent {
  readonly type: 'terminate-agent';
  readonly agentId: string;
  readonly request: InternalTerminateAgentRequest;
}

export interface GetAgentStatusEvent {
  readonly type: 'get-agent-status';
  readonly agentId?: string;
  readonly request: InternalGetAgentStatusRequest;
}

export type TaskAgentRequestEvent = LaunchTaskInstanceEvent | TerminateTaskInstanceEvent | TerminateAgentEvent | GetAgentStatusEvent;

export interface TaskAgentRequestBroadcaster {
  send(event: TaskAgentRequestEvent): Promise<void>;
}

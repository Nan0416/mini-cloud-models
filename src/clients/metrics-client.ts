import { Dimension, MetricReferenceNotification, Partition } from '../models';
import { LoadMetricsRequest, MetricWithDimensionsResponse, MetricWithDimenstionsRequest } from './metrics-request-response';

export interface DeleteNamespaceRequest {
  readonly namespace: string;
}

export interface DeleteNamespaceResponse {}

export interface ListNamespaceRequest {}

export interface ListNamespaceResponse {
  readonly namespaces: ReadonlyArray<string>;
}

/**
 * metrics client loads metrics from storage.
 *
 * Metrics storage contains aggregated metrics (e.g. 1 minue aggregated), the metrics client can aggregate metrics further (e.g. 5 minute aggregated)
 */
export interface MetricsClient {
  /**
   * Attention.
   * Shutdown metrics watcher before calling the method. Why? Because the metrics watcher background process utilitize in
   * process cache, the metrics watcher may not be aware of deleting the metric namespace.
   * @param namespace
   */
  deleteNamespace(request: DeleteNamespaceRequest): Promise<DeleteNamespaceResponse>;

  listNamespaces(request: ListNamespaceRequest): Promise<ListNamespaceResponse>;

  listMetricNames(namespace: string): Promise<string[]>;

  listMetricDimensions(namespace: string, metricName: string): Promise<Dimension[]>;

  metricWithDimensions(request: MetricWithDimenstionsRequest): Promise<MetricWithDimensionsResponse>;

  metrics(request: LoadMetricsRequest, concurrency?: number): Promise<Partition[]>;
}

export interface RealTimeMetricsClient {
  init(): Promise<void>;
  onFilter?: (notification: MetricReferenceNotification) => Promise<boolean>;
  onMetrics: (notification: MetricReferenceNotification, metrics: Partition) => void;
}

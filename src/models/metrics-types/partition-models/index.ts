import { MetricPartition } from './metric-partition';
import { NamespacePartition } from './namespace-partition';
export type Partition = MetricPartition | NamespacePartition;

export * from './metric-partition';
export * from './namespace-partition';
export * from './common';

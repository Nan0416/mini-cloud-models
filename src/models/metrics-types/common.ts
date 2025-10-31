export type MetricValueUnit = 'ms' | 'count' | 'percent' | 'unitless';

export const METRIC_VALUE_UNITS: ReadonlyArray<MetricValueUnit> = ['ms', 'count', 'percent', 'unitless'];

export type MetricStat = 'max' | 'min' | 'avg' | 'p99' | 'p95' | 'p90' | 'p75' | 'p50' | 'p25' | 'p10' | 'count' | 'sum';

export const METRIC_STATS: ReadonlyArray<MetricStat> = ['max', 'min', 'avg', 'p99', 'p95', 'p90', 'p75', 'p50', 'p25', 'p10', 'count', 'sum'];

export type MetricReferenceTtl = '2weeks' | '3months' | '6months';

export const METRIC_REFERENCE_TTLS: ReadonlyArray<MetricReferenceTtl> = ['2weeks', '3months', '6months'];

/**
 * dimesions used to report and query
 */
export interface Dimensions {
  readonly [key: string]: string;
}

/**
 * dimensions stored in metadata.
 *
 * A metric can have a different values on the same key.
 *
 * CreateMarketOrderLatency, .e.g. key: symbol, value: can be AAPL, BA, etc.
 */
export interface Dimension {
  readonly key: string;
  readonly value: string;
}

export interface TimeValue {
  readonly t: number;
  readonly v: number;
}

/**
 * Raw metric item emitted by client processes.
 */
export interface MetricItem {
  readonly namespace: string;
  readonly dimensions: ReadonlyArray<Dimension>;
  readonly name: string;
  readonly value: number;
  readonly unit: MetricValueUnit;
  readonly timestamp: string;
}

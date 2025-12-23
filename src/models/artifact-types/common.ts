export type StorageType = 'fs' | 's3';

interface BaseLocation {
  readonly type: StorageType;
}

export interface S3Location extends BaseLocation {
  readonly type: 's3';
  readonly presignedUrl: string;
}

export interface FsLocation extends BaseLocation {
  readonly type: 'fs';
  readonly path: string;
}

export type Location = S3Location | FsLocation;

export interface ArtifactMetadata {
  readonly artifactType: string;
  readonly artifactName: string;
  readonly storageType: StorageType;
  readonly expireAt?: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly description?: string;
  readonly location?: Location;
}

export interface Artifact<T> extends ArtifactMetadata {
  readonly artifact: T;
}

import { Artifact, ArtifactMetadata, StorageType, Location } from '../models';

export interface BatchListArtifactMetadatasRequest {
  readonly artifactType: string;
  readonly from?: string;
  readonly to?: string;
  readonly withLocation?: boolean;
}

export interface BatchListArtifactMetadatasResponse {
  readonly artifactMetadatas: ArtifactMetadata[];
}

export interface HasArtifactRequest {
  readonly artifactType: string;
  readonly artifactName: string;
}

export interface HasArtifactResponse {
  readonly has: boolean;
}

export interface GetArtifactMetadataRequest {
  readonly artifactType: string;
  readonly artifactName: string;
  readonly withLocation?: boolean;
}

export interface GetArtifactMetadataResponse {
  readonly artifactMetadata: ArtifactMetadata;
}

export interface DeleteArtifactRequest {
  readonly artifactType: string;
  readonly artifactName: string;
}

export interface DeleteArtifactResponse {}

export interface BatchDeleteArtifactsRequest {
  readonly artifactType: string;
  readonly from?: string;
  readonly to?: string;
}

export interface BatchDeleteArtifactsResponse {}

export interface CreateArtifactRequest {
  readonly artifactType: string;
  readonly artifactName: string;
  readonly storageType: StorageType;
  readonly expireAt?: string;
  readonly description?: string;
  // todo: allow override.
  // readonly override?: boolean;
}

export interface CreateArtifactResponse {
  readonly location: Location;
}

export interface GetArtifactRequest {
  readonly artifactType: string;
  readonly artifactName: string;
}

export interface GetArtifactResponse<T> {
  readonly artifact: Artifact<T>;
}

export interface UploadArtifactRequest<T> {
  readonly artifactType: string;
  readonly artifactName: string;
  readonly storageLocationType: StorageType;
  readonly expireAt?: string;
  readonly description?: string;
  readonly artifact: T;
  readonly override?: boolean;
}

export interface UploadArtifactResponse {
  readonly artifactMetadata: ArtifactMetadata;
}

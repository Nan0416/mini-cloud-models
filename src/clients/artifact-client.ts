import {
  BatchDeleteArtifactsRequest,
  BatchDeleteArtifactsResponse,
  BatchListArtifactMetadatasRequest,
  BatchListArtifactMetadatasResponse,
  CreateArtifactRequest,
  CreateArtifactResponse,
  DeleteArtifactRequest,
  DeleteArtifactResponse,
  GetArtifactMetadataRequest,
  GetArtifactMetadataResponse,
  GetArtifactRequest,
  GetArtifactResponse,
  HasArtifactRequest,
  HasArtifactResponse,
  UploadArtifactRequest,
  UploadArtifactResponse,
} from './artifact-request-response';

export interface ArtifactClient {
  hasArtifact(request: HasArtifactRequest): Promise<HasArtifactResponse>;
  getArtifactMetadata(request: GetArtifactMetadataRequest): Promise<GetArtifactMetadataResponse>;
  listArtifactMetadataByTimeWindow(request: BatchListArtifactMetadatasRequest): Promise<BatchListArtifactMetadatasResponse>;
  createArtifact(request: CreateArtifactRequest): Promise<CreateArtifactResponse>;
  deleteArtifact(request: DeleteArtifactRequest): Promise<DeleteArtifactResponse>;
  batchDeleteArtifacts(request: BatchDeleteArtifactsRequest): Promise<BatchDeleteArtifactsResponse>;
}

export interface ArtifactClientLib {
  getArtifact<T>(request: GetArtifactRequest): Promise<GetArtifactResponse<T>>;
  uploadArtifact<T>(request: UploadArtifactRequest<T>): Promise<UploadArtifactResponse>;
}

export interface ArtifactTransmitter<L extends Location> {
  download<T>(location: L): Promise<T | undefined>;
  upload<T>(location: L, artifact: T): Promise<void>;
}

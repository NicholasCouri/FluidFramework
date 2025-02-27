## API Report File for "@fluidframework/routerlicious-driver"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as api from '@fluidframework/driver-definitions';
import * as api_2 from '@fluidframework/protocol-definitions';
import { DocumentStorageServiceProxy } from '@fluidframework/driver-utils';
import { GitManager } from '@fluidframework/server-services-client';
import { IClient } from '@fluidframework/protocol-definitions';
import { IDeltasFetchResult } from '@fluidframework/driver-definitions';
import { IDeltaStorageService } from '@fluidframework/driver-definitions';
import { IDocumentDeltaStorageService } from '@fluidframework/driver-definitions';
import { IDocumentService } from '@fluidframework/driver-definitions';
import { IDocumentServiceFactory } from '@fluidframework/driver-definitions';
import { IDocumentStorageService } from '@fluidframework/driver-definitions';
import { IDocumentStorageServicePolicies } from '@fluidframework/driver-definitions';
import { IResolvedUrl } from '@fluidframework/driver-definitions';
import { ISequencedDocumentMessage } from '@fluidframework/protocol-definitions';
import { ISnapshotTree } from '@fluidframework/protocol-definitions';
import { IStream } from '@fluidframework/driver-definitions';
import { ISummaryContext } from '@fluidframework/driver-definitions';
import { ISummaryTree } from '@fluidframework/protocol-definitions';
import { ITelemetryBaseLogger } from '@fluidframework/common-definitions';
import { ITelemetryLogger } from '@fluidframework/common-definitions';
import { ITokenClaims } from '@fluidframework/protocol-definitions';
import { IVersion } from '@fluidframework/protocol-definitions';
import { RestWrapper } from '@fluidframework/server-services-client';

// @public
export class DefaultTokenProvider implements ITokenProvider {
    constructor(jwt: string);
    // (undocumented)
    fetchOrdererToken(): Promise<ITokenResponse>;
    // (undocumented)
    fetchStorageToken(): Promise<ITokenResponse>;
}

// @public
export class DeltaStorageService implements IDeltaStorageService {
    constructor(url: string, restWrapper: RestWrapper, logger: ITelemetryLogger);
    // (undocumented)
    get(tenantId: string, id: string, from: number, // inclusive
    to: number): Promise<IDeltasFetchResult>;
}

// @public
export class DocumentDeltaStorageService implements IDocumentDeltaStorageService {
    constructor(tenantId: string, id: string, storageService: IDeltaStorageService, documentStorageService: DocumentStorageService);
    // (undocumented)
    fetchMessages(from: number, to: number | undefined, abortSignal?: AbortSignal, cachedOnly?: boolean, fetchReason?: string): IStream<ISequencedDocumentMessage[]>;
}

// @public
export class DocumentPostCreateError extends Error {
    constructor(
    innerError: Error);
    // (undocumented)
    readonly name = "DocumentPostCreateError";
    // (undocumented)
    get stack(): string | undefined;
}

// @public
export class DocumentService implements api.IDocumentService {
    // Warning: (ae-forgotten-export) The symbol "ICache" needs to be exported by the entry point index.d.ts
    // Warning: (ae-forgotten-export) The symbol "ISnapshotTreeVersion" needs to be exported by the entry point index.d.ts
    constructor(resolvedUrl: api.IResolvedUrl, ordererUrl: string, deltaStorageUrl: string, gitUrl: string, logger: ITelemetryLogger, tokenProvider: ITokenProvider, tenantId: string, documentId: string, driverPolicies: IRouterliciousDriverPolicies, blobCache: ICache<ArrayBufferLike>, snapshotTreeCache: ICache<ISnapshotTreeVersion>);
    connectToDeltaStorage(): Promise<api.IDocumentDeltaStorageService>;
    connectToDeltaStream(client: IClient): Promise<api.IDocumentDeltaConnection>;
    connectToStorage(): Promise<api.IDocumentStorageService>;
    // (undocumented)
    dispose(): void;
    // (undocumented)
    protected documentId: string;
    // (undocumented)
    protected ordererUrl: string;
    // (undocumented)
    readonly resolvedUrl: api.IResolvedUrl;
    // (undocumented)
    protected tenantId: string;
    // (undocumented)
    protected tokenProvider: ITokenProvider;
}

// @public (undocumented)
export class DocumentStorageService extends DocumentStorageServiceProxy {
    constructor(id: string, manager: GitManager, logger: ITelemetryLogger, policies?: IDocumentStorageServicePolicies, driverPolicies?: IRouterliciousDriverPolicies, blobCache?: ICache<ArrayBufferLike>, snapshotTreeCache?: ICache<ISnapshotTreeVersion>, noCacheGitManager?: GitManager | undefined);
    // (undocumented)
    getSnapshotTree(version?: IVersion): Promise<ISnapshotTree | null>;
    // (undocumented)
    readonly id: string;
    // (undocumented)
    get logTailSha(): string | undefined;
    // (undocumented)
    manager: GitManager;
    // (undocumented)
    noCacheGitManager?: GitManager | undefined;
}

// @public (undocumented)
export interface IRouterliciousDriverPolicies {
    aggregateBlobsSmallerThanBytes: number | undefined;
    enableDiscovery?: boolean;
    enablePrefetch: boolean;
    enableRestLess: boolean;
    enableWholeSummaryUpload: boolean;
    maxConcurrentOrdererRequests: number;
    maxConcurrentStorageRequests: number;
}

// @public
export interface ITokenProvider {
    documentPostCreateCallback?(documentId: string, creationToken: string): Promise<void>;
    fetchOrdererToken(tenantId: string, documentId?: string, refresh?: boolean): Promise<ITokenResponse>;
    fetchStorageToken(tenantId: string, documentId: string, refresh?: boolean): Promise<ITokenResponse>;
}

// @public (undocumented)
export interface ITokenResponse {
    // (undocumented)
    fromCache?: boolean;
    // (undocumented)
    jwt: string;
}

// @public
export interface ITokenService {
    // (undocumented)
    extractClaims(token: string): ITokenClaims;
}

// @public
export class NullBlobStorageService implements IDocumentStorageService {
    // (undocumented)
    createBlob(file: ArrayBufferLike): Promise<api_2.ICreateBlobResponse>;
    // (undocumented)
    downloadSummary(handle: api_2.ISummaryHandle): Promise<api_2.ISummaryTree>;
    // (undocumented)
    getSnapshotTree(version?: api_2.IVersion): Promise<api_2.ISnapshotTree | null>;
    // (undocumented)
    getVersions(versionId: string | null, count: number): Promise<api_2.IVersion[]>;
    // (undocumented)
    readBlob(blobId: string): Promise<ArrayBufferLike>;
    // (undocumented)
    get repositoryUrl(): string;
    // (undocumented)
    uploadSummaryWithContext(summary: api_2.ISummaryTree, context: ISummaryContext): Promise<string>;
}

// @public
export class RouterliciousDocumentServiceFactory implements IDocumentServiceFactory {
    constructor(tokenProvider: ITokenProvider, driverPolicies?: Partial<IRouterliciousDriverPolicies>);
    // (undocumented)
    createContainer(createNewSummary: ISummaryTree | undefined, resolvedUrl: IResolvedUrl, logger?: ITelemetryBaseLogger, clientIsSummarizer?: boolean): Promise<IDocumentService>;
    // (undocumented)
    createDocumentService(resolvedUrl: IResolvedUrl, logger?: ITelemetryBaseLogger, clientIsSummarizer?: boolean, isCreateContainer?: boolean): Promise<IDocumentService>;
    // (undocumented)
    readonly protocolName = "fluid:";
}

// (No @packageDocumentation comment for this package)

```

/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
import { strict as assert } from "assert";
import { ITestObjectProvider } from "@fluidframework/test-utils";
import { describeE2EDocsRuntime } from "@fluidframework/test-version-utils";
import { benchmark } from "@fluid-tools/benchmark";
import { DocumentCreator } from "./DocumentCreator";
import { DocumentMap } from "./DocumentMap";

const scenarioTitle = "Load Document";
describeE2EDocsRuntime(scenarioTitle, (getTestObjectProvider, getDocumentInfo) => {
	let documentMap: DocumentMap;
	let provider: ITestObjectProvider;

	before(async () => {
		provider = getTestObjectProvider();
		assert(getDocumentInfo !== undefined, "documentType needs to be defined.");
		const docData = getDocumentInfo(); // returns the document to be processed.

		documentMap = DocumentCreator.create({
			testName: `${scenarioTitle} - ${docData.testTitle}`,
			provider,
			documentType: docData.documentType,
			benchmarkType: "E2ETime",
		});
		await documentMap.initializeDocument();
	});

	benchmark({
		title: scenarioTitle,
		benchmarkFnAsync: async () => {
			const container = await documentMap.loadDocument();
			await provider.ensureSynchronized();
			container.close();
		},
	});
});

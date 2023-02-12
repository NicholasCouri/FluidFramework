/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import { FieldKinds, mapFromNamed, namedTreeSchema } from "../../feature-libraries";
import {
	ValueSchema,
	FieldSchema,
	TreeSchemaIdentifier,
	NamedTreeSchema,
	fieldSchema,
	SchemaData,
	EmptyKey,
} from "../../core";
import { brand } from "../../util";

/**
 * Types allowed as roots of Json content.
 * Since the Json domain is recursive, this set is declared,
 * then used in the schema, then populated below.
 */
const jsonTypes: Set<TreeSchemaIdentifier> = new Set();

/**
 * @alpha
 */
export const jsonObject: NamedTreeSchema = namedTreeSchema({
	name: brand("Json.Object"),
	extraLocalFields: fieldSchema(FieldKinds.optional, jsonTypes),
});

/**
 * @alpha
 */
export const jsonArray: NamedTreeSchema = namedTreeSchema({
	name: brand("Json.Array"),
	localFields: { [EmptyKey]: fieldSchema(FieldKinds.sequence, jsonTypes) },
});

/**
 * @alpha
 */
export const jsonNumber: NamedTreeSchema = namedTreeSchema({
	name: brand("Json.Number"),
	value: ValueSchema.Number,
});

/**
 * @alpha
 */
export const jsonString: NamedTreeSchema = namedTreeSchema({
	name: brand("Json.String"),
	value: ValueSchema.String,
});

/**
 * @alpha
 */
export const jsonNull: NamedTreeSchema = namedTreeSchema({
	name: brand("Json.Null"),
});

/**
 * @alpha
 */
export const jsonBoolean: NamedTreeSchema = namedTreeSchema({
	name: brand("Json.Boolean"),
	value: ValueSchema.Boolean,
});

/**
 * @alpha
 */
export const jsonSchemaData: SchemaData = {
	treeSchema: mapFromNamed([
		jsonObject,
		jsonArray,
		jsonNumber,
		jsonString,
		jsonNull,
		jsonBoolean,
	]),
	globalFieldSchema: new Map(),
};

jsonSchemaData.treeSchema.forEach((_, key) => jsonTypes.add(key));

/**
 * @alpha
 */
export const jsonRoot: FieldSchema = fieldSchema(FieldKinds.value, jsonTypes);

import * as winston from "winston";
import * as core from "../core";
import * as utils from "../utils";
import { Router } from "./router";

export class Partition {
    private routers = new Map<string, Router>();

    public process(rawMessage: utils.kafkaConsumer.IMessage) {
        // TODO do I want a topic processor???

        winston.info(`${rawMessage.topic}:${rawMessage.partition}@${rawMessage.offset}`);

        // TODO this type of breakout is pretty specific to us. We might want some kind of topic handler, etc...
        const message = JSON.parse(rawMessage.value) as core.ISequencedOperationMessage;
        if (message.type !== core.SequencedOperationType) {
            return;
        }

        // Create the router if it doesn't exist
        if (!this.routers.has(message.documentId)) {
            const router = new Router(message.documentId /* possibly pass initialization context to router */);
            this.routers.set(message.documentId, router);
        }

        // Route the message
        const router = this.routers.get(message.documentId);
        router.route(message);
    }
}

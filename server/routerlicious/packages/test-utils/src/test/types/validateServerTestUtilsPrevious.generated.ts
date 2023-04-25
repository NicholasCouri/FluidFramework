/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
/*
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 * Generated by fluid-type-test-generator in @fluidframework/build-tools.
 */
import * as old from "@fluidframework/server-test-utils-previous";
import * as current from "../../index";

type TypeOnly<T> = {
    [P in keyof T]: TypeOnly<T[P]>;
};

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_DebugLogger": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_DebugLogger():
    TypeOnly<old.DebugLogger>;
declare function use_current_ClassDeclaration_DebugLogger(
    use: TypeOnly<current.DebugLogger>);
use_current_ClassDeclaration_DebugLogger(
    get_old_ClassDeclaration_DebugLogger());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_DebugLogger": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_DebugLogger():
    TypeOnly<current.DebugLogger>;
declare function use_old_ClassDeclaration_DebugLogger(
    use: TypeOnly<old.DebugLogger>);
use_old_ClassDeclaration_DebugLogger(
    get_current_ClassDeclaration_DebugLogger());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IEvent": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IEvent():
    TypeOnly<old.IEvent>;
declare function use_current_InterfaceDeclaration_IEvent(
    use: TypeOnly<current.IEvent>);
use_current_InterfaceDeclaration_IEvent(
    get_old_InterfaceDeclaration_IEvent());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IEvent": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IEvent():
    TypeOnly<current.IEvent>;
declare function use_old_InterfaceDeclaration_IEvent(
    use: TypeOnly<old.IEvent>);
use_old_InterfaceDeclaration_IEvent(
    get_current_InterfaceDeclaration_IEvent());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ITestDbFactory": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ITestDbFactory():
    TypeOnly<old.ITestDbFactory>;
declare function use_current_InterfaceDeclaration_ITestDbFactory(
    use: TypeOnly<current.ITestDbFactory>);
use_current_InterfaceDeclaration_ITestDbFactory(
    get_old_InterfaceDeclaration_ITestDbFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ITestDbFactory": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ITestDbFactory():
    TypeOnly<current.ITestDbFactory>;
declare function use_old_InterfaceDeclaration_ITestDbFactory(
    use: TypeOnly<old.ITestDbFactory>);
use_old_InterfaceDeclaration_ITestDbFactory(
    get_current_InterfaceDeclaration_ITestDbFactory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_KafkaMessageFactory": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_KafkaMessageFactory():
    TypeOnly<old.KafkaMessageFactory>;
declare function use_current_ClassDeclaration_KafkaMessageFactory(
    use: TypeOnly<current.KafkaMessageFactory>);
use_current_ClassDeclaration_KafkaMessageFactory(
    get_old_ClassDeclaration_KafkaMessageFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_KafkaMessageFactory": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_KafkaMessageFactory():
    TypeOnly<current.KafkaMessageFactory>;
declare function use_old_ClassDeclaration_KafkaMessageFactory(
    use: TypeOnly<old.KafkaMessageFactory>);
use_old_ClassDeclaration_KafkaMessageFactory(
    get_current_ClassDeclaration_KafkaMessageFactory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MessageFactory": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_MessageFactory():
    TypeOnly<old.MessageFactory>;
declare function use_current_ClassDeclaration_MessageFactory(
    use: TypeOnly<current.MessageFactory>);
use_current_ClassDeclaration_MessageFactory(
    get_old_ClassDeclaration_MessageFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_MessageFactory": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_MessageFactory():
    TypeOnly<current.MessageFactory>;
declare function use_old_ClassDeclaration_MessageFactory(
    use: TypeOnly<old.MessageFactory>);
use_old_ClassDeclaration_MessageFactory(
    get_current_ClassDeclaration_MessageFactory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestCache": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_TestCache():
    TypeOnly<old.TestCache>;
declare function use_current_ClassDeclaration_TestCache(
    use: TypeOnly<current.TestCache>);
use_current_ClassDeclaration_TestCache(
    get_old_ClassDeclaration_TestCache());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestCache": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_TestCache():
    TypeOnly<current.TestCache>;
declare function use_old_ClassDeclaration_TestCache(
    use: TypeOnly<old.TestCache>);
use_old_ClassDeclaration_TestCache(
    get_current_ClassDeclaration_TestCache());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestClientManager": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_TestClientManager():
    TypeOnly<old.TestClientManager>;
declare function use_current_ClassDeclaration_TestClientManager(
    use: TypeOnly<current.TestClientManager>);
use_current_ClassDeclaration_TestClientManager(
    get_old_ClassDeclaration_TestClientManager());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestClientManager": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_TestClientManager():
    TypeOnly<current.TestClientManager>;
declare function use_old_ClassDeclaration_TestClientManager(
    use: TypeOnly<old.TestClientManager>);
use_old_ClassDeclaration_TestClientManager(
    get_current_ClassDeclaration_TestClientManager());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestCollection": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_TestCollection():
    TypeOnly<old.TestCollection>;
declare function use_current_ClassDeclaration_TestCollection(
    use: TypeOnly<current.TestCollection>);
use_current_ClassDeclaration_TestCollection(
    get_old_ClassDeclaration_TestCollection());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestCollection": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_TestCollection():
    TypeOnly<current.TestCollection>;
declare function use_old_ClassDeclaration_TestCollection(
    use: TypeOnly<old.TestCollection>);
use_old_ClassDeclaration_TestCollection(
    get_current_ClassDeclaration_TestCollection());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestConsumer": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_TestConsumer():
    TypeOnly<old.TestConsumer>;
declare function use_current_ClassDeclaration_TestConsumer(
    use: TypeOnly<current.TestConsumer>);
use_current_ClassDeclaration_TestConsumer(
    get_old_ClassDeclaration_TestConsumer());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestConsumer": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_TestConsumer():
    TypeOnly<current.TestConsumer>;
declare function use_old_ClassDeclaration_TestConsumer(
    use: TypeOnly<old.TestConsumer>);
use_old_ClassDeclaration_TestConsumer(
    get_current_ClassDeclaration_TestConsumer());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestContext": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_TestContext():
    TypeOnly<old.TestContext>;
declare function use_current_ClassDeclaration_TestContext(
    use: TypeOnly<current.TestContext>);
use_current_ClassDeclaration_TestContext(
    get_old_ClassDeclaration_TestContext());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestContext": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_TestContext():
    TypeOnly<current.TestContext>;
declare function use_old_ClassDeclaration_TestContext(
    use: TypeOnly<old.TestContext>);
use_old_ClassDeclaration_TestContext(
    get_current_ClassDeclaration_TestContext());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestDb": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_TestDb():
    TypeOnly<old.TestDb>;
declare function use_current_ClassDeclaration_TestDb(
    use: TypeOnly<current.TestDb>);
use_current_ClassDeclaration_TestDb(
    get_old_ClassDeclaration_TestDb());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestDb": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_TestDb():
    TypeOnly<current.TestDb>;
declare function use_old_ClassDeclaration_TestDb(
    use: TypeOnly<old.TestDb>);
use_old_ClassDeclaration_TestDb(
    get_current_ClassDeclaration_TestDb());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestDbFactory": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_TestDbFactory():
    TypeOnly<old.TestDbFactory>;
declare function use_current_ClassDeclaration_TestDbFactory(
    use: TypeOnly<current.TestDbFactory>);
use_current_ClassDeclaration_TestDbFactory(
    get_old_ClassDeclaration_TestDbFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestDbFactory": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_TestDbFactory():
    TypeOnly<current.TestDbFactory>;
declare function use_old_ClassDeclaration_TestDbFactory(
    use: TypeOnly<old.TestDbFactory>);
use_old_ClassDeclaration_TestDbFactory(
    get_current_ClassDeclaration_TestDbFactory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestDeltaManager": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_TestDeltaManager():
    TypeOnly<old.TestDeltaManager>;
declare function use_current_ClassDeclaration_TestDeltaManager(
    use: TypeOnly<current.TestDeltaManager>);
use_current_ClassDeclaration_TestDeltaManager(
    get_old_ClassDeclaration_TestDeltaManager());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestDeltaManager": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_TestDeltaManager():
    TypeOnly<current.TestDeltaManager>;
declare function use_old_ClassDeclaration_TestDeltaManager(
    use: TypeOnly<old.TestDeltaManager>);
use_old_ClassDeclaration_TestDeltaManager(
    get_current_ClassDeclaration_TestDeltaManager());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestDocumentStorage": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_TestDocumentStorage():
    TypeOnly<old.TestDocumentStorage>;
declare function use_current_ClassDeclaration_TestDocumentStorage(
    use: TypeOnly<current.TestDocumentStorage>);
use_current_ClassDeclaration_TestDocumentStorage(
    get_old_ClassDeclaration_TestDocumentStorage());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestDocumentStorage": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_TestDocumentStorage():
    TypeOnly<current.TestDocumentStorage>;
declare function use_old_ClassDeclaration_TestDocumentStorage(
    use: TypeOnly<old.TestDocumentStorage>);
use_old_ClassDeclaration_TestDocumentStorage(
    get_current_ClassDeclaration_TestDocumentStorage());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestHistorian": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_TestHistorian():
    TypeOnly<old.TestHistorian>;
declare function use_current_ClassDeclaration_TestHistorian(
    use: TypeOnly<current.TestHistorian>);
use_current_ClassDeclaration_TestHistorian(
    get_old_ClassDeclaration_TestHistorian());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestHistorian": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_TestHistorian():
    TypeOnly<current.TestHistorian>;
declare function use_old_ClassDeclaration_TestHistorian(
    use: TypeOnly<old.TestHistorian>);
use_old_ClassDeclaration_TestHistorian(
    get_current_ClassDeclaration_TestHistorian());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestKafka": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_TestKafka():
    TypeOnly<old.TestKafka>;
declare function use_current_ClassDeclaration_TestKafka(
    use: TypeOnly<current.TestKafka>);
use_current_ClassDeclaration_TestKafka(
    get_old_ClassDeclaration_TestKafka());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestKafka": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_TestKafka():
    TypeOnly<current.TestKafka>;
declare function use_old_ClassDeclaration_TestKafka(
    use: TypeOnly<old.TestKafka>);
use_old_ClassDeclaration_TestKafka(
    get_current_ClassDeclaration_TestKafka());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestNotImplementedDocumentRepository": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_TestNotImplementedDocumentRepository():
    TypeOnly<old.TestNotImplementedDocumentRepository>;
declare function use_current_ClassDeclaration_TestNotImplementedDocumentRepository(
    use: TypeOnly<current.TestNotImplementedDocumentRepository>);
use_current_ClassDeclaration_TestNotImplementedDocumentRepository(
    get_old_ClassDeclaration_TestNotImplementedDocumentRepository());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestNotImplementedDocumentRepository": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_TestNotImplementedDocumentRepository():
    TypeOnly<current.TestNotImplementedDocumentRepository>;
declare function use_old_ClassDeclaration_TestNotImplementedDocumentRepository(
    use: TypeOnly<old.TestNotImplementedDocumentRepository>);
use_old_ClassDeclaration_TestNotImplementedDocumentRepository(
    get_current_ClassDeclaration_TestNotImplementedDocumentRepository());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestProducer": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_TestProducer():
    TypeOnly<old.TestProducer>;
declare function use_current_ClassDeclaration_TestProducer(
    use: TypeOnly<current.TestProducer>);
use_current_ClassDeclaration_TestProducer(
    get_old_ClassDeclaration_TestProducer());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestProducer": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_TestProducer():
    TypeOnly<current.TestProducer>;
declare function use_old_ClassDeclaration_TestProducer(
    use: TypeOnly<old.TestProducer>);
use_old_ClassDeclaration_TestProducer(
    get_current_ClassDeclaration_TestProducer());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestPublisher": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_TestPublisher():
    TypeOnly<old.TestPublisher>;
declare function use_current_ClassDeclaration_TestPublisher(
    use: TypeOnly<current.TestPublisher>);
use_current_ClassDeclaration_TestPublisher(
    get_old_ClassDeclaration_TestPublisher());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestPublisher": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_TestPublisher():
    TypeOnly<current.TestPublisher>;
declare function use_old_ClassDeclaration_TestPublisher(
    use: TypeOnly<old.TestPublisher>);
use_old_ClassDeclaration_TestPublisher(
    get_current_ClassDeclaration_TestPublisher());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestTenant": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_TestTenant():
    TypeOnly<old.TestTenant>;
declare function use_current_ClassDeclaration_TestTenant(
    use: TypeOnly<current.TestTenant>);
use_current_ClassDeclaration_TestTenant(
    get_old_ClassDeclaration_TestTenant());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestTenant": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_TestTenant():
    TypeOnly<current.TestTenant>;
declare function use_old_ClassDeclaration_TestTenant(
    use: TypeOnly<old.TestTenant>);
use_old_ClassDeclaration_TestTenant(
    get_current_ClassDeclaration_TestTenant());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestTenantManager": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_TestTenantManager():
    TypeOnly<old.TestTenantManager>;
declare function use_current_ClassDeclaration_TestTenantManager(
    use: TypeOnly<current.TestTenantManager>);
use_current_ClassDeclaration_TestTenantManager(
    get_old_ClassDeclaration_TestTenantManager());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestTenantManager": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_TestTenantManager():
    TypeOnly<current.TestTenantManager>;
declare function use_old_ClassDeclaration_TestTenantManager(
    use: TypeOnly<old.TestTenantManager>);
use_old_ClassDeclaration_TestTenantManager(
    get_current_ClassDeclaration_TestTenantManager());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestThrottleAndUsageStorageManager": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_TestThrottleAndUsageStorageManager():
    TypeOnly<old.TestThrottleAndUsageStorageManager>;
declare function use_current_ClassDeclaration_TestThrottleAndUsageStorageManager(
    use: TypeOnly<current.TestThrottleAndUsageStorageManager>);
use_current_ClassDeclaration_TestThrottleAndUsageStorageManager(
    get_old_ClassDeclaration_TestThrottleAndUsageStorageManager());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestThrottleAndUsageStorageManager": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_TestThrottleAndUsageStorageManager():
    TypeOnly<current.TestThrottleAndUsageStorageManager>;
declare function use_old_ClassDeclaration_TestThrottleAndUsageStorageManager(
    use: TypeOnly<old.TestThrottleAndUsageStorageManager>);
use_old_ClassDeclaration_TestThrottleAndUsageStorageManager(
    get_current_ClassDeclaration_TestThrottleAndUsageStorageManager());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestThrottler": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_TestThrottler():
    TypeOnly<old.TestThrottler>;
declare function use_current_ClassDeclaration_TestThrottler(
    use: TypeOnly<current.TestThrottler>);
use_current_ClassDeclaration_TestThrottler(
    get_old_ClassDeclaration_TestThrottler());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestThrottler": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_TestThrottler():
    TypeOnly<current.TestThrottler>;
declare function use_old_ClassDeclaration_TestThrottler(
    use: TypeOnly<old.TestThrottler>);
use_old_ClassDeclaration_TestThrottler(
    get_current_ClassDeclaration_TestThrottler());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestThrottlerHelper": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_TestThrottlerHelper():
    TypeOnly<old.TestThrottlerHelper>;
declare function use_current_ClassDeclaration_TestThrottlerHelper(
    use: TypeOnly<current.TestThrottlerHelper>);
use_current_ClassDeclaration_TestThrottlerHelper(
    get_old_ClassDeclaration_TestThrottlerHelper());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestThrottlerHelper": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_TestThrottlerHelper():
    TypeOnly<current.TestThrottlerHelper>;
declare function use_old_ClassDeclaration_TestThrottlerHelper(
    use: TypeOnly<old.TestThrottlerHelper>);
use_old_ClassDeclaration_TestThrottlerHelper(
    get_current_ClassDeclaration_TestThrottlerHelper());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestTopic": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_TestTopic():
    TypeOnly<old.TestTopic>;
declare function use_current_ClassDeclaration_TestTopic(
    use: TypeOnly<current.TestTopic>);
use_current_ClassDeclaration_TestTopic(
    get_old_ClassDeclaration_TestTopic());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_TestTopic": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_TestTopic():
    TypeOnly<current.TestTopic>;
declare function use_old_ClassDeclaration_TestTopic(
    use: TypeOnly<old.TestTopic>);
use_old_ClassDeclaration_TestTopic(
    get_current_ClassDeclaration_TestTopic());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_writeSummaryTree": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_writeSummaryTree():
    TypeOnly<typeof old.writeSummaryTree>;
declare function use_current_FunctionDeclaration_writeSummaryTree(
    use: TypeOnly<typeof current.writeSummaryTree>);
use_current_FunctionDeclaration_writeSummaryTree(
    get_old_FunctionDeclaration_writeSummaryTree());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_writeSummaryTree": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_writeSummaryTree():
    TypeOnly<typeof current.writeSummaryTree>;
declare function use_old_FunctionDeclaration_writeSummaryTree(
    use: TypeOnly<typeof old.writeSummaryTree>);
use_old_FunctionDeclaration_writeSummaryTree(
    get_current_FunctionDeclaration_writeSummaryTree());

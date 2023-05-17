/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
/*
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 * Generated by fluid-type-test-generator in @fluidframework/build-tools.
 */
import * as old from "@fluidframework/gitresources-previous";
import * as current from "../../index";

type TypeOnly<T> = {
    [P in keyof T]: TypeOnly<T[P]>;
};

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IAuthor": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IAuthor():
    TypeOnly<old.IAuthor>;
declare function use_current_InterfaceDeclaration_IAuthor(
    use: TypeOnly<current.IAuthor>);
use_current_InterfaceDeclaration_IAuthor(
    get_old_InterfaceDeclaration_IAuthor());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IAuthor": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IAuthor():
    TypeOnly<current.IAuthor>;
declare function use_old_InterfaceDeclaration_IAuthor(
    use: TypeOnly<old.IAuthor>);
use_old_InterfaceDeclaration_IAuthor(
    get_current_InterfaceDeclaration_IAuthor());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IBlob": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IBlob():
    TypeOnly<old.IBlob>;
declare function use_current_InterfaceDeclaration_IBlob(
    use: TypeOnly<current.IBlob>);
use_current_InterfaceDeclaration_IBlob(
    get_old_InterfaceDeclaration_IBlob());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IBlob": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IBlob():
    TypeOnly<current.IBlob>;
declare function use_old_InterfaceDeclaration_IBlob(
    use: TypeOnly<old.IBlob>);
use_old_InterfaceDeclaration_IBlob(
    get_current_InterfaceDeclaration_IBlob());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICommit": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ICommit():
    TypeOnly<old.ICommit>;
declare function use_current_InterfaceDeclaration_ICommit(
    use: TypeOnly<current.ICommit>);
use_current_InterfaceDeclaration_ICommit(
    get_old_InterfaceDeclaration_ICommit());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICommit": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ICommit():
    TypeOnly<current.ICommit>;
declare function use_old_InterfaceDeclaration_ICommit(
    use: TypeOnly<old.ICommit>);
use_old_InterfaceDeclaration_ICommit(
    get_current_InterfaceDeclaration_ICommit());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICommitDetails": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ICommitDetails():
    TypeOnly<old.ICommitDetails>;
declare function use_current_InterfaceDeclaration_ICommitDetails(
    use: TypeOnly<current.ICommitDetails>);
use_current_InterfaceDeclaration_ICommitDetails(
    get_old_InterfaceDeclaration_ICommitDetails());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICommitDetails": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ICommitDetails():
    TypeOnly<current.ICommitDetails>;
declare function use_old_InterfaceDeclaration_ICommitDetails(
    use: TypeOnly<old.ICommitDetails>);
use_old_InterfaceDeclaration_ICommitDetails(
    get_current_InterfaceDeclaration_ICommitDetails());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICommitHash": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ICommitHash():
    TypeOnly<old.ICommitHash>;
declare function use_current_InterfaceDeclaration_ICommitHash(
    use: TypeOnly<current.ICommitHash>);
use_current_InterfaceDeclaration_ICommitHash(
    get_old_InterfaceDeclaration_ICommitHash());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICommitHash": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ICommitHash():
    TypeOnly<current.ICommitHash>;
declare function use_old_InterfaceDeclaration_ICommitHash(
    use: TypeOnly<old.ICommitHash>);
use_old_InterfaceDeclaration_ICommitHash(
    get_current_InterfaceDeclaration_ICommitHash());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICommitter": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ICommitter():
    TypeOnly<old.ICommitter>;
declare function use_current_InterfaceDeclaration_ICommitter(
    use: TypeOnly<current.ICommitter>);
use_current_InterfaceDeclaration_ICommitter(
    get_old_InterfaceDeclaration_ICommitter());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICommitter": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ICommitter():
    TypeOnly<current.ICommitter>;
declare function use_old_InterfaceDeclaration_ICommitter(
    use: TypeOnly<old.ICommitter>);
use_old_InterfaceDeclaration_ICommitter(
    get_current_InterfaceDeclaration_ICommitter());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICreateBlobParams": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ICreateBlobParams():
    TypeOnly<old.ICreateBlobParams>;
declare function use_current_InterfaceDeclaration_ICreateBlobParams(
    use: TypeOnly<current.ICreateBlobParams>);
use_current_InterfaceDeclaration_ICreateBlobParams(
    get_old_InterfaceDeclaration_ICreateBlobParams());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICreateBlobParams": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ICreateBlobParams():
    TypeOnly<current.ICreateBlobParams>;
declare function use_old_InterfaceDeclaration_ICreateBlobParams(
    use: TypeOnly<old.ICreateBlobParams>);
use_old_InterfaceDeclaration_ICreateBlobParams(
    get_current_InterfaceDeclaration_ICreateBlobParams());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICreateBlobResponse": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ICreateBlobResponse():
    TypeOnly<old.ICreateBlobResponse>;
declare function use_current_InterfaceDeclaration_ICreateBlobResponse(
    use: TypeOnly<current.ICreateBlobResponse>);
use_current_InterfaceDeclaration_ICreateBlobResponse(
    get_old_InterfaceDeclaration_ICreateBlobResponse());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICreateBlobResponse": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ICreateBlobResponse():
    TypeOnly<current.ICreateBlobResponse>;
declare function use_old_InterfaceDeclaration_ICreateBlobResponse(
    use: TypeOnly<old.ICreateBlobResponse>);
use_old_InterfaceDeclaration_ICreateBlobResponse(
    get_current_InterfaceDeclaration_ICreateBlobResponse());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICreateCommitParams": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ICreateCommitParams():
    TypeOnly<old.ICreateCommitParams>;
declare function use_current_InterfaceDeclaration_ICreateCommitParams(
    use: TypeOnly<current.ICreateCommitParams>);
use_current_InterfaceDeclaration_ICreateCommitParams(
    get_old_InterfaceDeclaration_ICreateCommitParams());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICreateCommitParams": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ICreateCommitParams():
    TypeOnly<current.ICreateCommitParams>;
declare function use_old_InterfaceDeclaration_ICreateCommitParams(
    use: TypeOnly<old.ICreateCommitParams>);
use_old_InterfaceDeclaration_ICreateCommitParams(
    get_current_InterfaceDeclaration_ICreateCommitParams());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICreateRefParams": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ICreateRefParams():
    TypeOnly<old.ICreateRefParams>;
declare function use_current_InterfaceDeclaration_ICreateRefParams(
    use: TypeOnly<current.ICreateRefParams>);
use_current_InterfaceDeclaration_ICreateRefParams(
    get_old_InterfaceDeclaration_ICreateRefParams());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICreateRefParams": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ICreateRefParams():
    TypeOnly<current.ICreateRefParams>;
declare function use_old_InterfaceDeclaration_ICreateRefParams(
    use: TypeOnly<old.ICreateRefParams>);
use_old_InterfaceDeclaration_ICreateRefParams(
    get_current_InterfaceDeclaration_ICreateRefParams());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICreateRepoParams": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ICreateRepoParams():
    TypeOnly<old.ICreateRepoParams>;
declare function use_current_InterfaceDeclaration_ICreateRepoParams(
    use: TypeOnly<current.ICreateRepoParams>);
use_current_InterfaceDeclaration_ICreateRepoParams(
    get_old_InterfaceDeclaration_ICreateRepoParams());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICreateRepoParams": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ICreateRepoParams():
    TypeOnly<current.ICreateRepoParams>;
declare function use_old_InterfaceDeclaration_ICreateRepoParams(
    use: TypeOnly<old.ICreateRepoParams>);
use_old_InterfaceDeclaration_ICreateRepoParams(
    get_current_InterfaceDeclaration_ICreateRepoParams());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICreateTagParams": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ICreateTagParams():
    TypeOnly<old.ICreateTagParams>;
declare function use_current_InterfaceDeclaration_ICreateTagParams(
    use: TypeOnly<current.ICreateTagParams>);
use_current_InterfaceDeclaration_ICreateTagParams(
    get_old_InterfaceDeclaration_ICreateTagParams());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICreateTagParams": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ICreateTagParams():
    TypeOnly<current.ICreateTagParams>;
declare function use_old_InterfaceDeclaration_ICreateTagParams(
    use: TypeOnly<old.ICreateTagParams>);
use_old_InterfaceDeclaration_ICreateTagParams(
    get_current_InterfaceDeclaration_ICreateTagParams());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICreateTreeEntry": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ICreateTreeEntry():
    TypeOnly<old.ICreateTreeEntry>;
declare function use_current_InterfaceDeclaration_ICreateTreeEntry(
    use: TypeOnly<current.ICreateTreeEntry>);
use_current_InterfaceDeclaration_ICreateTreeEntry(
    get_old_InterfaceDeclaration_ICreateTreeEntry());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICreateTreeEntry": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ICreateTreeEntry():
    TypeOnly<current.ICreateTreeEntry>;
declare function use_old_InterfaceDeclaration_ICreateTreeEntry(
    use: TypeOnly<old.ICreateTreeEntry>);
use_old_InterfaceDeclaration_ICreateTreeEntry(
    get_current_InterfaceDeclaration_ICreateTreeEntry());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICreateTreeParams": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ICreateTreeParams():
    TypeOnly<old.ICreateTreeParams>;
declare function use_current_InterfaceDeclaration_ICreateTreeParams(
    use: TypeOnly<current.ICreateTreeParams>);
use_current_InterfaceDeclaration_ICreateTreeParams(
    get_old_InterfaceDeclaration_ICreateTreeParams());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICreateTreeParams": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ICreateTreeParams():
    TypeOnly<current.ICreateTreeParams>;
declare function use_old_InterfaceDeclaration_ICreateTreeParams(
    use: TypeOnly<old.ICreateTreeParams>);
use_old_InterfaceDeclaration_ICreateTreeParams(
    get_current_InterfaceDeclaration_ICreateTreeParams());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IHeader": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IHeader():
    TypeOnly<old.IHeader>;
declare function use_current_InterfaceDeclaration_IHeader(
    use: TypeOnly<current.IHeader>);
use_current_InterfaceDeclaration_IHeader(
    get_old_InterfaceDeclaration_IHeader());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IHeader": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IHeader():
    TypeOnly<current.IHeader>;
declare function use_old_InterfaceDeclaration_IHeader(
    use: TypeOnly<old.IHeader>);
use_old_InterfaceDeclaration_IHeader(
    get_current_InterfaceDeclaration_IHeader());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IPatchRefParams": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IPatchRefParams():
    TypeOnly<old.IPatchRefParams>;
declare function use_current_InterfaceDeclaration_IPatchRefParams(
    use: TypeOnly<current.IPatchRefParams>);
use_current_InterfaceDeclaration_IPatchRefParams(
    get_old_InterfaceDeclaration_IPatchRefParams());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IPatchRefParams": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IPatchRefParams():
    TypeOnly<current.IPatchRefParams>;
declare function use_old_InterfaceDeclaration_IPatchRefParams(
    use: TypeOnly<old.IPatchRefParams>);
use_old_InterfaceDeclaration_IPatchRefParams(
    get_current_InterfaceDeclaration_IPatchRefParams());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IRef": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IRef():
    TypeOnly<old.IRef>;
declare function use_current_InterfaceDeclaration_IRef(
    use: TypeOnly<current.IRef>);
use_current_InterfaceDeclaration_IRef(
    get_old_InterfaceDeclaration_IRef());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IRef": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IRef():
    TypeOnly<current.IRef>;
declare function use_old_InterfaceDeclaration_IRef(
    use: TypeOnly<old.IRef>);
use_old_InterfaceDeclaration_IRef(
    get_current_InterfaceDeclaration_IRef());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ITag": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ITag():
    TypeOnly<old.ITag>;
declare function use_current_InterfaceDeclaration_ITag(
    use: TypeOnly<current.ITag>);
use_current_InterfaceDeclaration_ITag(
    get_old_InterfaceDeclaration_ITag());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ITag": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ITag():
    TypeOnly<current.ITag>;
declare function use_old_InterfaceDeclaration_ITag(
    use: TypeOnly<old.ITag>);
use_old_InterfaceDeclaration_ITag(
    get_current_InterfaceDeclaration_ITag());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ITagger": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ITagger():
    TypeOnly<old.ITagger>;
declare function use_current_InterfaceDeclaration_ITagger(
    use: TypeOnly<current.ITagger>);
use_current_InterfaceDeclaration_ITagger(
    get_old_InterfaceDeclaration_ITagger());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ITagger": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ITagger():
    TypeOnly<current.ITagger>;
declare function use_old_InterfaceDeclaration_ITagger(
    use: TypeOnly<old.ITagger>);
use_old_InterfaceDeclaration_ITagger(
    get_current_InterfaceDeclaration_ITagger());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ITree": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ITree():
    TypeOnly<old.ITree>;
declare function use_current_InterfaceDeclaration_ITree(
    use: TypeOnly<current.ITree>);
use_current_InterfaceDeclaration_ITree(
    get_old_InterfaceDeclaration_ITree());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ITree": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ITree():
    TypeOnly<current.ITree>;
declare function use_old_InterfaceDeclaration_ITree(
    use: TypeOnly<old.ITree>);
use_old_InterfaceDeclaration_ITree(
    get_current_InterfaceDeclaration_ITree());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ITreeEntry": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ITreeEntry():
    TypeOnly<old.ITreeEntry>;
declare function use_current_InterfaceDeclaration_ITreeEntry(
    use: TypeOnly<current.ITreeEntry>);
use_current_InterfaceDeclaration_ITreeEntry(
    get_old_InterfaceDeclaration_ITreeEntry());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ITreeEntry": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ITreeEntry():
    TypeOnly<current.ITreeEntry>;
declare function use_old_InterfaceDeclaration_ITreeEntry(
    use: TypeOnly<old.ITreeEntry>);
use_old_InterfaceDeclaration_ITreeEntry(
    get_current_InterfaceDeclaration_ITreeEntry());

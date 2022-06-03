/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
/*
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 * Generated by fluid-type-validator in @fluidframework/build-tools.
 */
import * as old from "@fluidframework/view-interfaces-previous";
import * as current from "../../index";

type TypeOnly<T> = {
    [P in keyof T]: TypeOnly<T[P]>;
};

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidHTMLOptions": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IFluidHTMLOptions():
    TypeOnly<old.IFluidHTMLOptions>;
declare function use_current_InterfaceDeclaration_IFluidHTMLOptions(
    use: TypeOnly<current.IFluidHTMLOptions>);
use_current_InterfaceDeclaration_IFluidHTMLOptions(
    get_old_InterfaceDeclaration_IFluidHTMLOptions());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidHTMLOptions": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IFluidHTMLOptions():
    TypeOnly<current.IFluidHTMLOptions>;
declare function use_old_InterfaceDeclaration_IFluidHTMLOptions(
    use: TypeOnly<old.IFluidHTMLOptions>);
use_old_InterfaceDeclaration_IFluidHTMLOptions(
    get_current_InterfaceDeclaration_IFluidHTMLOptions());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_IFluidHTMLView": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_IFluidHTMLView():
    TypeOnly<typeof old.IFluidHTMLView>;
declare function use_current_VariableDeclaration_IFluidHTMLView(
    use: TypeOnly<typeof current.IFluidHTMLView>);
use_current_VariableDeclaration_IFluidHTMLView(
    get_old_VariableDeclaration_IFluidHTMLView());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_IFluidHTMLView": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_IFluidHTMLView():
    TypeOnly<typeof current.IFluidHTMLView>;
declare function use_old_VariableDeclaration_IFluidHTMLView(
    use: TypeOnly<typeof old.IFluidHTMLView>);
use_old_VariableDeclaration_IFluidHTMLView(
    get_current_VariableDeclaration_IFluidHTMLView());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidHTMLView": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IFluidHTMLView():
    TypeOnly<old.IFluidHTMLView>;
declare function use_current_InterfaceDeclaration_IFluidHTMLView(
    use: TypeOnly<current.IFluidHTMLView>);
use_current_InterfaceDeclaration_IFluidHTMLView(
    get_old_InterfaceDeclaration_IFluidHTMLView());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidHTMLView": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IFluidHTMLView():
    TypeOnly<current.IFluidHTMLView>;
declare function use_old_InterfaceDeclaration_IFluidHTMLView(
    use: TypeOnly<old.IFluidHTMLView>);
use_old_InterfaceDeclaration_IFluidHTMLView(
    get_current_InterfaceDeclaration_IFluidHTMLView());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_IFluidMountableView": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_IFluidMountableView():
    TypeOnly<typeof old.IFluidMountableView>;
declare function use_current_VariableDeclaration_IFluidMountableView(
    use: TypeOnly<typeof current.IFluidMountableView>);
use_current_VariableDeclaration_IFluidMountableView(
    get_old_VariableDeclaration_IFluidMountableView());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_IFluidMountableView": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_IFluidMountableView():
    TypeOnly<typeof current.IFluidMountableView>;
declare function use_old_VariableDeclaration_IFluidMountableView(
    use: TypeOnly<typeof old.IFluidMountableView>);
use_old_VariableDeclaration_IFluidMountableView(
    get_current_VariableDeclaration_IFluidMountableView());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidMountableView": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IFluidMountableView():
    TypeOnly<old.IFluidMountableView>;
declare function use_current_InterfaceDeclaration_IFluidMountableView(
    use: TypeOnly<current.IFluidMountableView>);
use_current_InterfaceDeclaration_IFluidMountableView(
    get_old_InterfaceDeclaration_IFluidMountableView());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidMountableView": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IFluidMountableView():
    TypeOnly<current.IFluidMountableView>;
declare function use_old_InterfaceDeclaration_IFluidMountableView(
    use: TypeOnly<old.IFluidMountableView>);
use_old_InterfaceDeclaration_IFluidMountableView(
    get_current_InterfaceDeclaration_IFluidMountableView());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidMountableViewClass": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IFluidMountableViewClass():
    TypeOnly<old.IFluidMountableViewClass>;
declare function use_current_InterfaceDeclaration_IFluidMountableViewClass(
    use: TypeOnly<current.IFluidMountableViewClass>);
use_current_InterfaceDeclaration_IFluidMountableViewClass(
    get_old_InterfaceDeclaration_IFluidMountableViewClass());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidMountableViewClass": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IFluidMountableViewClass():
    TypeOnly<current.IFluidMountableViewClass>;
declare function use_old_InterfaceDeclaration_IFluidMountableViewClass(
    use: TypeOnly<old.IFluidMountableViewClass>);
use_old_InterfaceDeclaration_IFluidMountableViewClass(
    get_current_InterfaceDeclaration_IFluidMountableViewClass());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IProvideFluidHTMLView": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IProvideFluidHTMLView():
    TypeOnly<old.IProvideFluidHTMLView>;
declare function use_current_InterfaceDeclaration_IProvideFluidHTMLView(
    use: TypeOnly<current.IProvideFluidHTMLView>);
use_current_InterfaceDeclaration_IProvideFluidHTMLView(
    get_old_InterfaceDeclaration_IProvideFluidHTMLView());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IProvideFluidHTMLView": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IProvideFluidHTMLView():
    TypeOnly<current.IProvideFluidHTMLView>;
declare function use_old_InterfaceDeclaration_IProvideFluidHTMLView(
    use: TypeOnly<old.IProvideFluidHTMLView>);
use_old_InterfaceDeclaration_IProvideFluidHTMLView(
    get_current_InterfaceDeclaration_IProvideFluidHTMLView());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IProvideFluidMountableView": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IProvideFluidMountableView():
    TypeOnly<old.IProvideFluidMountableView>;
declare function use_current_InterfaceDeclaration_IProvideFluidMountableView(
    use: TypeOnly<current.IProvideFluidMountableView>);
use_current_InterfaceDeclaration_IProvideFluidMountableView(
    get_old_InterfaceDeclaration_IProvideFluidMountableView());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IProvideFluidMountableView": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IProvideFluidMountableView():
    TypeOnly<current.IProvideFluidMountableView>;
declare function use_old_InterfaceDeclaration_IProvideFluidMountableView(
    use: TypeOnly<old.IProvideFluidMountableView>);
use_old_InterfaceDeclaration_IProvideFluidMountableView(
    get_current_InterfaceDeclaration_IProvideFluidMountableView());

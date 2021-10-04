import {SCOPE_OPTIONS_METADATA} from "../utils";
import {ScopeOptions, Type} from "../contracts";

export type ServicesOptions = ScopeOptions;

export function Service(options?: ServicesOptions): ClassDecorator {
    return (target: object) => Reflect.defineMetadata(SCOPE_OPTIONS_METADATA, options, target);
}

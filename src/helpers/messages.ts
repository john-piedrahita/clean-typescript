import { RequestMethod } from '../enums/request-method.enum';

export const MISSING_REQUIRED_DEPENDENCY = (defaultPlatform: string, transport: string) =>
    `No driver (${transport}) has been selected. In order to take advantage of the default driver, please, ensure to install the "${defaultPlatform}" package ($ npm install ${defaultPlatform}).`;

export const MODULE_INIT_MESSAGE = (text: TemplateStringsArray, module: string) => `${module} dependencies initialized`;

export const ROUTE_MAPPED_MESSAGE = (path: string, method: string | number) =>
  `Mapped {${path}, ${RequestMethod[method]}} route`;

export const CONTROLLER_MAPPING_MESSAGE = (name: string, path: string) =>
  `${name} {${path}}:`;

export const INVALID_EXECUTION_CONTEXT = (methodName: string, currentContext: string) =>
  `Calling ${methodName} is not allowed in this context. Your current execution context is "${currentContext}".`;

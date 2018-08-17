
/**
 * Special type allows to use Function and get known its type as T.
 */
export interface IObjectType<T> { new(...args: any[]): T; }

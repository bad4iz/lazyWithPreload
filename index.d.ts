import { ComponentType } from 'react';
export type PreloadComponent<T extends ComponentType<any>> = T & {
    preload: () => Promise<T>;
};
/**
 *
 * @param {function} factory - ()=>import(path)
 * @returns {LazyExoticComponent<ComponentType<any>>}
 */
export default function lazyWithPreload<T extends ComponentType<any>>(factory: () => Promise<{
    default: T;
}>): PreloadComponent<T>;

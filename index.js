import {lazy} from 'react'

/**
 *
 * @param {string} path
 * @returns {React.LazyExoticComponent<React.ComponentType<any>>}
 */
export default function lazyWithPreload(path) {
    const factory = ()=>import(path)
    const Component = lazy(factory);
    Component.preload = factory;
    return Component;
}

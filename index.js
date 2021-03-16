import {lazy} from 'react'

/**
 *
 * @param {function} factory - ()=>import(path)
 * @returns {React.LazyExoticComponent<React.ComponentType<any>>}
 */
export default function lazyWithPreload(factory) {
    const Component = lazy(factory);
    Component.preload = factory;
    return Component;
}

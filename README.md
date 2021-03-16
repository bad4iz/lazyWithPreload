# lazy with preload for ReactJS applications

![](https://travis-ci.org/bad4iz/lazy-with-preload.svg?branch=main)
![](https://img.shields.io/npm/v/lazy-with-preload.svg)
![](https://img.shields.io/npm/dt/lazy-with-preload.svg)

![](https://img.shields.io/github/commit-activity/m/bad4iz/lazyWithPreload.svg)
![](https://img.shields.io/github/last-commit/bad4iz/lazyWithPreload.svg)

![](https://img.shields.io/github/license/bad4iz/lazyWithPreload.svg)

This Npm package will be useful on any ReactJS applications for avoiding long load modules after switching routes. Especially effectively when you have a big bundle of modules which you need to use on switching between routes and you want to minimise primary chunk.

[example code github](https://github.com/miklblitz/react-lazy-load)   
[live example codesandbox](https://codesandbox.io/s/lazy-load-reactjs-24fin)

## install

```
yarn add lazy-with-preload
```

or

```
npm i --save lazy-with-preload
```

## Ease of use

```javascript

import lazyWithPreload from 'lazy-with-preload';

const OtherComponent  = lazyWithPreload(() => import('./OtherComponent'));

// somewhere in your component
// ...
OtherComponent.preload();
// ...
```

## Example

```javascript
import lazyWithPreload from 'lazy-with-preload';

const OtherComponent  = lazyWithPreload(() => import('./OtherComponent'));

// ...
<Link
    to="/other"
    // This component will be needed soon. Let's preload it!
    onMouseOver={() => OtherComponent.preload()}
>
    link OtherComponent
</Link>
// ...

```

or

```javascript
import { useEffect } from 'react';

import lazyWithPreload from 'lazy-with-preload';

const OtherComponent1 = lazyWithPreload(() => import('./OtherComponent1'));
const OtherComponent2 = lazyWithPreload(() => import('./OtherComponent2'));
const OtherComponent3 = lazyWithPreload(() => import('./OtherComponent3'));

export const SomeComponent = () => {
  useEffect(() => {
    OtherComponent1.preload();
    OtherComponent2.preload();
    OtherComponent3.preload();
  });
  return <div>
  /* here is your code */
  </div>;
};
```

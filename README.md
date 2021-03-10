# lazy with preload

## install
```
yarn add lazy-with-preload
```
or
```
npm i --save lazy-with-preload
```

## Usage

```javascript

import lazyWithPreload from 'lazy-with-preload'

const OtherComponent  = lazyWithPreload(() => import("./OtherComponent"));

// somewhere in your component
...
OtherComponent.preload();
...
```

## Example

```javascript
import lazyWithPreload from 'lazy-with-preload'

const OtherComponent  = lazyWithPreload(() => import("./OtherComponent"));

...
<button
    onClick={() => setShowOtherComponent(true)}
    // This component will be needed soon. Let's preload it!
    onMouseOver={() => OtherComponent.preload()}
>
    Click me to render OtherComponent
</button>
...

```

or

```javascript
import { useEffect } from 'react';

import lazyWithPreload from 'lazy-with-preload'

const OtherComponent1  = lazyWithPreload(() => import("./OtherComponent1"));
const OtherComponent2  = lazyWithPreload(() => import("./OtherComponent2"));
const OtherComponent3  = lazyWithPreload(() => import("./OtherComponent3"));

export const SomeComponent = () => {
    useEffect(()=>{
        OtherComponent1.preload()
        OtherComponent2.preload()
        OtherComponent3.preload()
    })
    return (
        <div>
            ...
        </div>
    );
};



```
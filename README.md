# lazy with preload

## Ease of use


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

const OtherComponent  = lazyWithPreload('./OtherComponent');

// somewhere in your component
// ...
OtherComponent.preload();
// ...
```

## Example

```javascript
import lazyWithPreload from 'lazy-with-preload';

const OtherComponent = lazyWithPreload('./OtherComponent');

// ...
<button
    onClick={() => setShowOtherComponent(true)}
    // This component will be needed soon. Let's preload it!
    onMouseOver={() => OtherComponent.preload()}
>
    Click me to render OtherComponent
</button>
// ...

```

or

```javascript
import { useEffect } from 'react';

import lazyWithPreload from 'lazy-with-preload'

const OtherComponent1  = lazyWithPreload("./OtherComponent1");
const OtherComponent2  = lazyWithPreload("./OtherComponent2");
const OtherComponent3  = lazyWithPreload("./OtherComponent3");

export const SomeComponent = () => {
    useEffect(()=>{
        OtherComponent1.preload()
        OtherComponent2.preload()
        OtherComponent3.preload()
    })
    return (
        <div>
        // ...
        </div>
    );
};



```
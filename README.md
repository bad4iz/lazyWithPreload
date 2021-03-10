# lazyWithPreload
```javascript

import lazyWithPreload from ''

const OtherComponent  = lazyWithPreload(() => import("./StockChart"));

// somewhere in your component
...

OtherComponent.preload();
...
```

```javascript
<button
    onClick={() => setShowOtherComponent(true)}
    // This component will be needed soon. Let's preload it!
    onMouseOver={() => OtherComponent.preload()}
>
    Click me to render OtherComponent
</button>
```
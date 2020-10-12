A demonstration of CSS file import from `node_modules` into a TS module via
webpack. The CSS file is consumed in a web component and scoped to its shadow
DOM.

## Instructions

1. Install npm
1. `git clone` and `cd` there
1. `npm install`
1. `npm run build`
1. Load the `dist/index.html` file in your browser

> **⚠ KNOWN ISSUE**  
> The `npm run build` will result in error the first time, because the
> `node_modules/leaflet/dist/leaflet.css.d.ts` file is not yet generated at the
> moment of consumption by the TS compiler.
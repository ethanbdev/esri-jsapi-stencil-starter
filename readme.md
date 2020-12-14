# Stencil App Starter

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all. In many cases, Stencil can be used as a drop in replacement for traditional frontend frameworks given the capabilities now available in the browser, though using it as such is certainly not required.

Stencil also enables a number of key capabilities on top of Web Components, in particular Server Side Rendering (SSR) without the need to run a headless browser, pre-rendering, and objects-as-properties (instead of just strings).

## Getting Started

This app provides a starting point to use the [ArcGIS JavaScript API](https://developers.arcgis.com/javascript/) with the new [ES modules](https://www.npmjs.com/package/@arcgis/core). It shows how to render a map view with some default widgets and styling using a really cool dot density visualization from here: https://developers.arcgis.com/javascript/latest/sample-code/sandbox/index.html?sample=visualization-dot-density. I have included some default eslint suggestions and used sass instead of default css.

Started with Stencil start app found here: (https://github.com/ionic-team/stencil-app-starter)

To get started, clone this repo to a new directory. Then run:

```bash
npm install
```

followed by:

```bash
npm run init:jsapi
```
Then:

```bash
npm start
```

To build the app for production, run:

```bash
npm run build
```

To update the version of the ArcGIS JavaScript API:

```
npm run update:jsapi
```

To run the unit tests once, run:

```
npm test
```

To run the unit tests and watch for file changes during development, run:

```
npm run test.watch
```

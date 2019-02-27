# Demo for (ideal) code splitting with Vuex

This is a demo repo to showcase that ideally, we could codesplit getters and actions per page (the page would be `src/usingModuleA`).
For it to work, it is necessary to split _actions_ and _getters_ from `index.js` which is imported by `store` into one or multiple files (`actions.js` and `getters.js`)

## Instructions

```sh
yarn
yarn build
grep -Rl 'Im a' dist # dist/1.bundle.js
```

## Dev

Use something like `serve`

```sh
# in two terminals
serve dist
yarn dev
```

# Demo for (ideal) code splitting with Vuex

This is a demo repo to showcase that ideally, we could codesplit getters and actions per page (the page would be `src/usingModuleA`).
For it to work, it is necessary to split _actions_ and _getters_ from `index.js` which is imported by `store` into one or multiple files (`actions.js` and `getters.js`)

## Instructions

First try without changing anything

```sh
yarn
yarn build
grep -Rl another dist # dist/1.js
```

The unused function in `actions.js` gets discarded

then comment out the content in `src/index.js` and build again:

```sh
yarn
yarn build
grep -Rl another dist # dist/1.js and dist/2.js
```

Both files 1.js and 2.js include **all actions**

Unfortunately, the same file cannot be code splitted into different bundles. Unused function can be removed though

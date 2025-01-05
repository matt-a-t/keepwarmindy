# Keep Warm Indy

A site to track places to warm up in Indy during winter 2025.

The list of warming centers can be found at `/src/assets/warming-centers-2024.json`

## For Development

If you have a place that people are able to stay and warm up at, please [open an issue](https://github.com/matt-a-t/keepwarmindy/issues/new) and include all the information you can about the location.

If you would like to contribute, please feel free to open a pull request. If you don't know what that means but want to contribute, feel free to [reach out to Matt](https://github.com/matt-a-t) and we can figure that out.

# For Development

This app is built with Vue. See below for recommended setup and usage.

## Google maps

This app includes a Google API key for the map view. This key has been locked down to only work from the domain keepwarmindy.org. If you want to develop locally, you'll need to replace it with your own key requested from Google. Make sure not to include your API keys in any commits that get pushed to the remote, or make sure you are properly securing your key to avoid malicious actors getting a hold of your key.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

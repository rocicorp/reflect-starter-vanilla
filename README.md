# Simple Reflect/Vite/Vanilla Starter

This is the Vite starter app (`npm create vite@latest`) adjusted to use Reflect instead of in-memory state.

## Install

```
npm install
```

## Dev

In one shell, start the Reflect dev serfver:

```
npx @rocicorp/reflect dev
```

In another shell, start the UI dev server:

```
npm run dev
```

Open the UI in two tabs and click the increment button.

## Deploy

Deploy the Reflect server to relect.net:

```
npx @rocicorp/reflect publish
```

Deploy the UI somewhere, like maybe vercel:

```
npx vercel
```

Note that you will have to configure the `serverOrigin` flag to `Reflect` to point to the production server with a `wss` protocol:

```js
const r = new Reflect({
  userID: "someUser",
  roomID: "myRoom",
  // Whatever publish printed out --  note `wss` protocol
  socketOrigin: "wss://reflect-starter-vanilla.rocicorp-bot.reflect-server.net",
  mutators,
});
```

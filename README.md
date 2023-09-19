# Simple Reflect/Vite/Vanilla Starter

This is the Vite starter app (`npm create vite@latest`) adjusted to use Reflect instead of in-memory state.

## Install

```bash
npm install
```

## Dev

In one shell, start the Reflect dev serfver:

```bash
npx @rocicorp/reflect dev
```

In another shell, start the UI dev server:

```bash
npm run dev
```

Open http://localhost:5173/ in two tabs and click the increment button.

## Deploy Reflect

Deploy the Reflect server to relect.net:

```bash
npx @rocicorp/reflect publish
```

Change the `serverOrigin` Reflect parameter to point to the production server with a `wss` protocol:

```js
const r = new Reflect({
  userID: "someUser",
  roomID: "myRoom",
  // Whatever publish printed out --  note `wss` protocol
  socketOrigin: "wss://reflect-starter-vanilla.rocicorp-bot.reflect-server.net",
  mutators,
});
```

Run the UI against the deployed server:

```bash
npm run dev
```

You can also publish the UI anywhere, for example Vercel:

```
npx vercel
```

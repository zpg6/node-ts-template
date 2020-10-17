# node-ts-template

Just an empty server to spin up Node.js a bit faster.

## Typescript

You can install TypeScript via `npm`

```
npm install -g typescript
```

Then run the compiler via `tsc`

```
npx tsc
```

## Getting Started

Get the files and the dependencies with two easy commands:

```
git clone https://github.com/zpg6/node-ts-template.git
npm install
```

## Develop

This will re-compile and re-run the server when you change a file in the `src` directory.

```
npm run dev
```

## Run

This will compile and run the server, but not re-compile when files are saved.

```
npm start
```

# What's Included

```
Generate a UUID (shows it's reloading)
http://localhost:9000/

Serve a static file (checks permissions)
http://localhost:9000/running
```

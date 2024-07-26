# Node.js, Express, and TypeScript Boilerplate

This is a simple boilerplate for setting up a Node.js, Express, and TypeScript project. It's designed to be used for coding interviews and small projects, providing a clean starting point with all necessary configurations.

## Features

- **TypeScript** for static typing.
- **Express** as the web framework.
- **ts-node-dev** for running the project in watch mode during development.
- Factory configured with types imported and a single file to work with.

## Setup

### 1. Initialize Project

Create a new directory and initialize a Node.js project.

```sh
mkdir my-express-ts-project
cd my-express-ts-project
npm init -y

npm install express
npm install typescript ts-node @types/node @types/express --save-dev
npm install ts-node-dev --save-dev

npx tsc --init
```

### 2. Install Dependencies

```sh
npm install express
npm install typescript ts-node @types/node @types/express --save-dev
npm install ts-node-dev --save-dev
```

### 3. Configure TypeScript

```sh
npx tsc --init
```
## Update the `tsconfig.json` with the following configuration.

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```
### 4. Project Structure

```sh
mkdir src
touch src/index.ts
```

### 5. Create Express Server

```typescript
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

### 6. Configure scripts

```json
"scripts": {
  "start": "ts-node src/index.ts",
  "build": "tsc",
  "serve": "node dist/index.js",
  "dev": "ts-node-dev --respawn --transpile-only src/index.ts"
}
```

## Running the project

# To run the project in development mode

```sh
npm run dev
pnpm run dev
bun run dev
```

# No need to build & serve

- Mostly because this is a boilerplate, if you are going to use it to build something anyway you're probably advance enough to do it yourself

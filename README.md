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

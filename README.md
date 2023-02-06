# prisma-generator-ts-enums

Automatically generates pure TypeScript enums from the enums in your [Prisma](https://github.com/prisma/prisma) schema.

[![Semantically released](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![License](https://img.shields.io/github/license/kuatsu/prisma-generator-ts-enums)](https://choosealicense.com/licenses/mit/)
[![Code size](https://img.shields.io/github/languages/code-size/kuatsu/prisma-generator-ts-enums)](https://github.com/kuatsu/prisma-generator-ts-enums)
![Written in TypeScript](https://img.shields.io/github/languages/top/kuatsu/prisma-generator-ts-enums)

## Why?

If you're like us and love both monorepos and Prisma, you might run into some trouble when trying to use the native Prisma-generated enums from `@prisma/client` in other apps. For example, this often becomes an issue with React Native / Expo apps that won't correctly run due to it not finding the enums at runtime. Using this generator, you can bypass those issues by generating native TypeScript enums from your Prisma schema enums to use those in your other apps instead.

## Installation & Usage

First, install the package.

```bash
$ npm install @kuatsu/prisma-generator-ts-enums
```

or

```bash
$ yarn add @kuatsu/prisma-generator-ts-enums
```

### Add the generator

Add the generator to your schema.

```prisma
generator enum {
  provider = "node node_modules/@kuatsu/prisma-generator-ts-enums" // specify the path to this generator here
  output   = "./types" // optionally, you can specify an output path here -- default is ./types
}
```

Finally, run `npx prisma generate` or `yarn prisma generate` and a TypeScript definition file with your enums will be generated in the configured `output` path.

## Example

To see an example, check out the Prisma schema in the `prisma` directory and the generated enums in the `prisma/types` directory.

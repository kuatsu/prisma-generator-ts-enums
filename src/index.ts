import { generatorHandler } from '@prisma/generator-helper';
import prettier from 'prettier';
import fs from 'fs';
import path from 'path';

generatorHandler({
  onManifest() {
    return {
      defaultOutput: './types/enums.d.ts',
      prettyName: 'Prisma TypeScript Enum Generator',
    };
  },
  async onGenerate(options) {
    const enums = options.dmmf.datamodel.enums;
    const output = options.generator.output?.value;

    if (output) {
      let result = '';
      enums.forEach((e) => {
        result += `export enum ${e.name} {\n`;
        e.values.forEach((v) => {
          result += `  ${v.name} = "${v.name}",\n`;
        });
        result += '}\n\n';
      });

      try {
        result = prettier.format(result, {
          trailingComma: 'es5',
          tabWidth: 2,
          semi: true,
          singleQuote: true,
          useTabs: false,
          parser: 'typescript',
        });

        await fs.promises.mkdir(path.dirname(output), {
          recursive: true,
        });

        await fs.promises.writeFile(output, result);
      } catch (error) {
        console.error(error);
        throw error;
      }
    } else {
      throw new Error('No output path specified for Prisma TypeScript Enum Generator');
    }
  },
});

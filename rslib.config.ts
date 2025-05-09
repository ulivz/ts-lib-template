import { defineConfig } from '@rslib/core';

export default defineConfig({
  source: {
    entry: {
      index: ['src/**'],
    },
  },
  lib: [
    {
      format: 'esm',
      syntax: 'es2021',
      bundle: false,
      dts: true,
    },
    {
      format: 'cjs',
      syntax: 'es2021',
      bundle: false,
      dts: true,
    },
  ],
  output: {
    target: 'web',
    cleanDistPath: true,
    sourceMap: true,
  },
});

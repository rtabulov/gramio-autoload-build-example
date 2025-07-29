// @filename: build.ts
import { autoload } from 'esbuild-plugin-autoload';

await Bun.build({
  entrypoints: ['src/index.ts'],
  target: 'bun',
  outdir: 'out',
  format: 'esm',
  plugins: [autoload('./src/commands')],
}).then(console.log);

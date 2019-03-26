import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'Scalpel',
  globalStyle: 'src/themes/scalpel.globals.scss',
  bundles: [
    { components: ['scpl-button'] },
    { components: ['scpl-card'] }
  ],
  plugins: [
    sass()
  ],
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  preamble: '(C) Pinetree Development https://pinetree.dev // Licensed under the MIT License',
};

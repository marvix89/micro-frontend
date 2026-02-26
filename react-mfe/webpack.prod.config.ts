import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';
import baseConfig from './module-federation.config';

export default composePlugins(
  withNx(),
  withReact(),
  (config) => {
    config.output = config.output || {};
    config.plugins = config.plugins || [];
    return config;
  },
  withModuleFederation(baseConfig)
);

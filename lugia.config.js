import { join } from 'path';

export default {
  disableCSSModules: true,
  cssModulesWithAffix: true,
  entry: './src/index.tsx',
  publicPath: '/',
  alias: {
    '@': join(__dirname, './src'),
  },
  extraBabelIncludes: [/decamelize/],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: '@lugia/lugia-web',
        libraryDirectory: 'dist',
      },
      '@lugia/lugia-web',
    ],
    [
      'import',
      {
        libraryName: '@lugia/lugia-mega-ui',
        libraryDirectory: 'dist',
      },
      '@lugia/lugia-mega-ui',
    ],
  ],
  applyWebpack(webpackConfig) {
    return webpackConfig;
  },

  dllDependenciesExcludes: ['@lugia/lugia-web', '@lugia/lugia-mega-ui', 'rc-util', '@lugia/mega-scripts'],
};

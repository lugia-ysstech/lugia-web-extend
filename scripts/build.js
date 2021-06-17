const compileComponent = require('@lugia/lugia-package-widgets').default;
const componentInvalid = require('../src/widgets/invalidComponent.json');
const externals = require('./externals');

const commonInvalid = [];
const hideInTollPanelComponents = {};
const themeInvalid = [...commonInvalid];
compileComponent({
  externals,
  importModules: [{
    libraryName: '@lugia/lugia-web',
    libraryDirectory: 'dist',
  }],
  componentInvalid,
  hideInTollPanelComponents,
  themeInvalid,
});

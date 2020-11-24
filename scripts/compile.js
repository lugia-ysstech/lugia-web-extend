/**
 *
 * create by grg on 2020/6/30
 *
 * @flow
 */
const externals = require("./externals");
const compileComponent = require('@lugia/devtools-widgets');
const componentInvalid = require('../src/widgets/invalidComponent.json')

const commonInvalid = [];
const hideInTollPanelComponents = {};
const themeInvalid = [...commonInvalid];

compileComponent({
  externals, importModules: [{
    libraryName: '@lugia/lugia-web',
    libraryDirectory: 'dist',
  }],
  componentInvalid,
  hideInTollPanelComponents,
  themeInvalid
});

/**
 *
 * create by guorg
 *
 * @flow
 */
const { createDesignInfo, createThemeMeta } = require('@lugia/devtools-material');
const path = require('path');
const { ensureFileSync, writeFileSync } = require('fs-extra');

const targetPath = path.join(__dirname, '../src/widgets');
const commonInvalid = [];
const componentInvalid = [];
const hideInTollPanelComponents = {};
const themeInvalid = [...commonInvalid];

// createDesignInfo(targetPath, componentInvalid);

async function createDesignInfoFile (targetPath) {
  const designInfoStr = await createDesignInfo(targetPath, componentInvalid, {
    outFile: 'string',
    hideInTollPanelComponents,
  });
  const designInfoPath = path.join(targetPath, 'designInfo.js');
  ensureFileSync(designInfoPath);

  writeFileSync(designInfoPath, designInfoStr);
}

createDesignInfoFile(targetPath);
createThemeMeta({ targetPath, invalid: themeInvalid });

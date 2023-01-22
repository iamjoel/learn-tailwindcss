/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const styleConfig = require('./sidebar-config/style')
const configConfig = require('./sidebar-config/config')
// const category3Config = require('./sidebar-config/category-3')


// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  style: styleConfig,
  config: configConfig,
  // category3: category3Config,
};

module.exports = sidebars;

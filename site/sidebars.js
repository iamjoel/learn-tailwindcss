/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const category1Config = require('./sidebar-config/category-1')
const category2Config = require('./sidebar-config/category-2')
const category3Config = require('./sidebar-config/category-3')


// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  category1: category1Config,
  category2: category2Config,
  category3: category3Config,
};

module.exports = sidebars;

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    {
      type: 'category',
      label: '+ Getting Started',
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'overview',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'faq',
          label: 'FAQ',
        },
        {
          type: 'doc',
          id: 'about',
          label: 'About',
        },
      ],
    },
    {
      type: 'category',
      label: 'For Users',
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'how-to-claim',
          label: 'How to claim a GitPOAP',
        },
        {
          type: 'doc',
          id: 'where-to-start',
          label: 'Contributors Guide',
        },
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'api',
          label: 'Public API',
        },
        {
          type: 'doc',
          id: 'github-bot',
          label: 'GitHub Bot',
        },
      ],
    },
    {
      type: 'doc',
      id: 'community',
      label: 'Community Projects',
    },
    // { type: 'autogenerated', dirName: '.' },
    { type: 'link', label: 'Discord Community Server', href: 'https://gitpoap.io/discord' },
  ],
};

module.exports = sidebars;

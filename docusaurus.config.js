// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GitPOAP Docs',
  tagline: 'Mint POAPs for open source contributions',
  url: 'https://gitpoap.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gitpoap', // Usually your GitHub org/user name.
  projectName: 'gitpoap-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.ts'),
          // Please change this to your repo.
          editUrl: 'https://github.com/gitpoap/gitpoap-docs/blob/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      navbar: {
        logo: {
          alt: 'GitPOAP Logo',
          src: 'img/logo_full_light.svg',
          srcDark: 'img/logo_full.svg',
        },
        items: [
          {
            href: 'https://github.com/gitpoap/gitpoap-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://gitpoap.io/discord',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/gitpoap',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Medium',
                href: 'https://medium.com/gitpoap',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/gitpoap',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

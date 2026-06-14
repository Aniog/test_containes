// SSR entry point for the /generators page.
// Vite's dev SSR loader imports this file via server.ssrLoadModule().
// The default export is the React component to render; getHeadHtml()
// returns per-page <head> tags including JSON-LD.

import React from 'react';
import GeneratorsPage from '@/components/generators/GeneratorsPage';
import { allGenerators, categories, totalGenerators } from '@/data/generators';
import { t } from '@/i18n/strings';

function buildHeadHtml(url) {
  const s = t('en');
  const path = (url || '/generators').split('?')[0].split('#')[0];
  const canonical = 'https://www.strikingly.com' + (path === '/' ? '' : path);

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: s.site.name,
        item: 'https://www.strikingly.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: s.breadcrumb.current,
        item: 'https://www.strikingly.com/generators',
      },
    ],
  };

  return [
    `<title>${'AI Website Generators - Build Any Site in Seconds | Strikingly'}</title>`,
    `<meta name="description" content="${'Browse Strikingly\'s AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.'}" />`,
    `<meta name="viewport" content="width=device-width, initial-scale=1" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:title" content="${'AI Website Generators - Build Any Site in Seconds | Strikingly'}" />`,
    `<meta property="og:description" content="${'Browse Strikingly\'s AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds.'}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:type" content="website" />`,
    `<script type="application/ld+json">${JSON.stringify(breadcrumbLd)}</script>`,
  ].join('\n    ');
}

export default function GeneratorsSsrEntry(props) {
  return React.createElement(GeneratorsPage, props);
}

export function getHeadHtml(url) {
  return buildHeadHtml(url);
}

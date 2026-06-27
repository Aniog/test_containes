import React from 'react';
import { strings } from '../data/generators';

const Breadcrumb = () => {
  const { breadcrumb } = strings.en;
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": breadcrumb.home,
        "item": "https://www.strikingly.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": breadcrumb.current,
        "item": "https://www.strikingly.com/generators"
      }
    ]
  };

  return (
    <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 py-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex items-center gap-2 text-body-text text-sm">
        <li>
          <a href="/" className="hover:text-brand-purple transition-colors">
            {breadcrumb.home}
          </a>
        </li>
        <li className="text-brand-purple select-none select-none">
          &gt;
        </li>
        <li className="font-normal" aria-current="page">
          {breadcrumb.current}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;

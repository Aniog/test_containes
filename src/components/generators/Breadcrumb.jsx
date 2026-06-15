import React from 'react';
import { strings } from '@/lib/generators-data';

const Breadcrumb = () => {
  const t = strings.en.common;
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": t.breadcrumbHome,
        "item": "https://www.strikingly.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": t.breadcrumbCurrent,
        "item": "https://www.strikingly.com/generators"
      }
    ]
  };

  return (
    <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-4 py-4">
      <ol className="flex items-center gap-2 text-[12px] text-body-gray">
        <li>
          <a href="/" className="hover:text-brand-purple transition-colors">
            {t.breadcrumbHome}
          </a>
        </li>
        <li className="select-none" aria-hidden="true">&gt;</li>
        <li className="font-semibold" aria-current="page">
          {t.breadcrumbCurrent}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;

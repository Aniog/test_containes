import React from 'react';
import { strings } from '@/data/strings';

const t = strings.en;

const Breadcrumb = () => (
  <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 py-2.5">
    <ol className="flex items-center gap-1.5 list-none m-0 p-0 text-sm text-body-text">
      <li>
        <a href="/" className="hover:text-brand-purple transition-colors">
          {t.breadcrumb.home}
        </a>
      </li>
      <li aria-hidden="true" className="text-body-text">&gt;</li>
      <li aria-current="page" className="text-heading-section font-semibold">
        {t.breadcrumb.current}
      </li>
    </ol>
  </nav>
);

export default Breadcrumb;

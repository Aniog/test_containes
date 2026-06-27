import React from 'react';
import { strings } from '../lib/strings';

const Breadcrumb = () => {
  const s = strings.en.nav.breadcrumb;
  
  return (
    <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 py-4">
      <ol className="flex items-center gap-2 text-xs font-body text-body-text">
        <li>
          <a href="https://www.strikingly.com" className="hover:text-brand-purple transition-colors">
            {s.strikingly}
          </a>
        </li>
        <li className="text-body-text/40" aria-hidden="true">&gt;</li>
        <li className="font-semibold text-body-text cursor-default">
          {s.generators}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;

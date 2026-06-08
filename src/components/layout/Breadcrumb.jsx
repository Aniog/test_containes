import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = () => {
  return (
    <nav className="w-full bg-[var(--bg-light)] py-4" aria-label="Breadcrumb">
      <div className="container-custom">
        <ol className="flex items-center space-x-2 text-sm text-[var(--text-body)]">
          <li>
            <a href="/" className="hover:text-[var(--brand-purple)] transition-colors">Strikingly</a>
          </li>
          <li>
            <ChevronRight className="w-3 h-3 text-[var(--brand-purple)]" aria-hidden="true" />
          </li>
          <li aria-current="page">
            AI Generators
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;

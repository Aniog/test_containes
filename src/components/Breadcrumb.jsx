import React from 'react';

export default function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="section-container py-[10px]">
      <ol className="flex items-center gap-1 text-[13px] font-body text-body-gray">
        <li>
          <a href="/" className="hover:text-brand-purple transition-colors">
            Strikingly
          </a>
        </li>
        <li aria-hidden="true" className="text-card-border">&gt;</li>
        <li aria-current="page" className="text-body-gray">
          AI Generators
        </li>
      </ol>
    </nav>
  );
}

import React from 'react';
import { strings } from '@/strings.en';

export default function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="bg-white border-b border-[#E2E4E7]">
      <div className="section-wrapper py-3">
        <ol className="flex items-center gap-2 text-sm text-[#636972]" style={{ fontFamily: 'var(--font-body)' }}>
          <li>
            <a href="/" className="hover:text-[#8159BB] transition-colors">
              {strings.breadcrumb.home}
            </a>
          </li>
          <li aria-hidden="true" className="text-[#8159BB]">&gt;</li>
          <li>
            <span aria-current="page">{strings.breadcrumb.current}</span>
          </li>
        </ol>
      </div>
    </nav>
  );
}

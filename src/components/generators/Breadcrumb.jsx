import React from 'react';
import strings from '@/data/strings.en.js';

export default function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="max-content section-padding py-[10px]">
      <ol className="flex items-center gap-[6px] text-[13px] font-body list-none m-0 p-0" style={{ color: '#636972' }}>
        <li>
          <a href="/" className="hover:underline focus-ring" style={{ color: '#636972' }}>
            {strings.breadcrumbHome}
          </a>
        </li>
        <li aria-hidden="true" style={{ color: '#C6C9CD' }}>/</li>
        <li className="font-semibold" style={{ color: '#2E2E2F' }}>
          {strings.breadcrumbCurrent}
        </li>
      </ol>
    </nav>
  );
}
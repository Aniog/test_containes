import React from 'react';
import strings from '@/data/strings.en';

export default function Breadcrumb() {
  const s = strings.breadcrumb;
  return (
    <nav aria-label="Breadcrumb" className="w-full bg-white">
      <div className="section-container py-[10px]">
        <ol className="flex items-center gap-2 text-[13px]" style={{ color: 'var(--body-text)' }}>
          <li>
            <a href="/" className="hover:underline" style={{ color: 'var(--brand-purple)' }}>
              {s.home}
            </a>
          </li>
          <li aria-hidden="true" style={{ color: 'var(--brand-purple)' }}>&gt;</li>
          <li>
            <span aria-current="page">{s.current}</span>
          </li>
        </ol>
      </div>
    </nav>
  );
}

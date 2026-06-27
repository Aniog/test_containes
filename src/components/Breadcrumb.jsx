import React from 'react';
import strings from '../strings';

export default function Breadcrumb() {
  const t = strings.en;
  return (
    <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 py-[10px]">
      <ol className="flex items-center gap-1 m-0 p-0 list-none text-[13px] font-body text-[#636972]">
        <li>
          <a
            href="/"
            className="text-[#636972] no-underline hover:text-brand-purple transition-colors"
          >
            {t.breadcrumbHome}
          </a>
        </li>
        <li aria-hidden="true" className="select-none">&gt;</li>
        <li className="text-[#636972]">{t.breadcrumbGenerators}</li>
      </ol>
    </nav>
  );
}

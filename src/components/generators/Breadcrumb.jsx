import React from 'react';
import strings from '../../strings';

const s = strings.en;

const Breadcrumb = () => (
  <nav aria-label="Breadcrumb" className="content-container py-[10px]">
    <ol className="flex items-center gap-[6px] text-[13px] list-none m-0 p-0">
      <li>
        <a href="/" className="text-[var(--color-body-text)] hover:text-[var(--color-brand-purple)] transition-colors">
          {s.breadcrumbHome}
        </a>
      </li>
      <li aria-hidden="true" className="text-[var(--color-card-border)]">/</li>
      <li aria-current="page" className="text-[var(--color-body-text)] font-medium">
        {s.breadcrumbCurrent}
      </li>
    </ol>
  </nav>
);

export default Breadcrumb;

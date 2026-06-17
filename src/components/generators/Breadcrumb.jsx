import React from 'react';
import { strings } from '../../strings';

const s = strings.en.breadcrumb;

export default function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="max-w-content mx-auto px-5 py-3">
      <ol className="flex items-center gap-2 text-sm text-body-text list-none m-0 p-0" style={{ fontFamily: "'Open Sans', sans-serif" }}>
        <li className="m-0">
          <a href="/" className="text-body-text hover:text-brand-purple no-underline transition-colors">
            {s.home}
          </a>
        </li>
        <li aria-hidden="true" className="text-body-text mx-1">&gt;</li>
        <li className="m-0">
          <span aria-current="page" className="text-body-text">{s.current}</span>
        </li>
      </ol>
    </nav>
  );
}

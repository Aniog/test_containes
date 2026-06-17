import React from 'react';
import { strings } from '@/data/strings';

const s = strings.en;

export default function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="w-full bg-white">
      <div className="section-wrapper py-[10px]">
        <ol className="flex items-center gap-2 text-[13px] text-body-text font-body m-0 p-0 list-none">
          <li>
            <a
              href="/"
              className="text-body-text hover:text-brand-purple transition-colors no-underline"
            >
              {s.breadcrumb.home}
            </a>
          </li>
          <li aria-hidden="true" className="text-brand-purple font-bold">&gt;</li>
          <li>
            <span aria-current="page" className="text-body-text">
              {s.breadcrumb.current}
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
}

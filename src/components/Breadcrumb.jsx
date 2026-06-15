import React from 'react';
import { strings } from '@/lib/strings';

export const Breadcrumb = () => {
  const t = strings.en.breadcrumb;
  return (
    <nav aria-label="Breadcrumb" className="container-custom py-2">
      <ol className="flex items-center gap-2 text-[12px] text-[var(--body-text)]">
        <li>
          <a href="/" className="hover:text-[var(--brand-purple)]">{t.strikingly}</a>
        </li>
        <li className="text-[var(--brand-purple)] font-bold">{'>'}</li>
        <li className="font-medium" aria-current="page">{t.aiGenerators}</li>
      </ol>
    </nav>
  );
};

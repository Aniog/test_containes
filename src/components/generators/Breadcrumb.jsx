import React from 'react';
import { strings } from '@/lib/strings.en';

const Breadcrumb = () => {
  const { en } = strings;
  return (
    <nav aria-label="Breadcrumb" className="container-custom py-4">
      <ol className="flex items-center space-x-2 text-sm text-[#636972]">
        <li>
          <a href="https://www.strikingly.com/" className="hover:text-brand-purple transition-colors">
            {en.common.breadcrumbHome}
          </a>
        </li>
        <li className="text-[#8159BB]" aria-hidden="true">{">"}</li>
        <li className="text-[#636972] font-normal" aria-current="page">
          {en.common.breadcrumbCurrent}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;

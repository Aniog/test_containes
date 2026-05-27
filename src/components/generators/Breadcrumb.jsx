import React from 'react';
import { t } from '../../data/generatorsData';

const Breadcrumb = () => (
  <nav aria-label="Breadcrumb" className="bg-white">
    <div className="max-w-content mx-auto px-5 py-3">
      <ol className="flex items-center gap-2 text-sm text-body-gray list-none m-0 p-0">
        <li>
          <a href="/" className="hover:text-brand-purple transition-colors">
            {t('breadcrumbHome')}
          </a>
        </li>
        <li aria-hidden="true" className="text-body-gray">&gt;</li>
        <li aria-current="page" className="text-body-gray">
          {t('breadcrumbCurrent')}
        </li>
      </ol>
    </div>
  </nav>
);

export default Breadcrumb;

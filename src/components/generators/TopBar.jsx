import React from 'react';
import { t } from '../../data/generatorsData';

const TopBar = () => (
  <header className="bg-white border-b border-subtle-divider">
    <div className="max-w-content mx-auto px-5 py-4">
      <a
        href="/"
        className="font-heading text-heading-darker text-sm tracking-wide hover:opacity-80 transition-opacity"
      >
        {t('topBarLogo')}
      </a>
    </div>
  </header>
);

export default TopBar;

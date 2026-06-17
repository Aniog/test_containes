import React from 'react';
import { strings } from '@/lib/strings.en';

const TopBar = () => {
  return (
    <header className="bg-white border-b border-subtle-divider sticky top-0 z-50">
      <div className="container-custom h-14 flex items-center">
        <div className="flex items-center gap-1">
          <span className="font-heading text-xl text-h1-line1-text lowercase tracking-tight">strikingly</span>
          <span className="font-heading text-xl text-brand-purple lowercase tracking-tight">AI</span>
        </div>
      </div>
    </header>
  );
};

export default TopBar;

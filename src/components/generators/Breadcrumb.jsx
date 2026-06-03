

import React from 'react';
import strings from '@/data/strings.en.js';

const Breadcrumb = () => {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <a href="/" className="breadcrumb-link">{strings.breadcrumbHome}</a>
        </li>
        <li className="breadcrumb-separator" aria-hidden="true">/</li>
        <li className="breadcrumb-item">
          <span className="breadcrumb-current" aria-current="page">{strings.breadcrumbCurrent}</span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;


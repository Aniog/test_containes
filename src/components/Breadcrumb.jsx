import React from 'react';
import { strings } from '../data/strings';

const s = strings.en;

export default function Breadcrumb() {
  return (
    <nav className="breadcrumb-nav" aria-label="Breadcrumb">
      <ol className="breadcrumb-list" itemScope itemType="https://schema.org/BreadcrumbList">
        <li className="breadcrumb-item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <a href="/" itemProp="item">
            <span itemProp="name">{s.breadcrumbHome}</span>
          </a>
          <meta itemProp="position" content="1" />
        </li>
        <li className="breadcrumb-separator" aria-hidden="true">&gt;</li>
        <li className="breadcrumb-item breadcrumb-current" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <span itemProp="name">{s.breadcrumbCurrent}</span>
          <meta itemProp="position" content="2" />
        </li>
      </ol>
    </nav>
  );
}

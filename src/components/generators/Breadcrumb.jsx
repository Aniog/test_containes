import React from 'react';

const Breadcrumb = ({ t }) => (
  <nav className="strk-breadcrumb" aria-label="Breadcrumb">
    <div className="strk-container">
      <ol
        className="strk-breadcrumb__list"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <a className="strk-breadcrumb__link" href="/" itemProp="item">
            <span itemProp="name">{t('breadcrumb.home')}</span>
          </a>
          <meta itemProp="position" content="1" />
        </li>
        <li
          className="strk-breadcrumb__sep"
          aria-hidden="true"
        >
          &gt;
        </li>
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          aria-current="page"
        >
          <span
            className="strk-breadcrumb__current"
            itemProp="name"
          >
            {t('breadcrumb.current')}
          </span>
          <meta itemProp="position" content="2" />
        </li>
      </ol>
    </div>
  </nav>
);

export default Breadcrumb;

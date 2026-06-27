import React from "react";
import { strings } from "../strings";

export default function Breadcrumb() {
  const s = strings.en.breadcrumb;
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <div className="container">
        <ol className="breadcrumb__list" itemScope itemType="https://schema.org/BreadcrumbList">
          <li
            className="breadcrumb__item"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <a className="breadcrumb__link" href="/" itemProp="item">
              <span itemProp="name">{s.home}</span>
            </a>
            <meta itemProp="position" content="1" />
            <span className="breadcrumb__sep" aria-hidden="true">&gt;</span>
          </li>
          <li
            className="breadcrumb__item"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <span className="breadcrumb__current" itemProp="name" aria-current="page">
              {s.current}
            </span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </div>
    </nav>
  );
}
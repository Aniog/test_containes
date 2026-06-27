import React from "react";
import { strings } from "../../data/strings";

export default function Breadcrumb() {
  const s = strings.en;
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <div className="container">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <a href="/">
              {s.breadcrumbHome}
            </a>
          </li>
          <li className="breadcrumb-separator" aria-hidden="true">
            &gt;
          </li>
          <li className="breadcrumb-item breadcrumb-current" aria-current="page">
            {s.breadcrumbCurrent}
          </li>
        </ol>
      </div>
    </nav>
  );
}

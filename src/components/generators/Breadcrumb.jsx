import React from 'react';

export default function Breadcrumb({ s }) {
  return (
    <nav aria-label="Breadcrumb" className="strk-breadcrumb">
      <div className="strk-container">
        <ol className="strk-breadcrumb-list">
          <li className="strk-breadcrumb-item">
            <a href="/" className="strk-breadcrumb-link">
              {s.breadcrumb.home}
            </a>
          </li>
          <li className="strk-breadcrumb-sep" aria-hidden="true">
            &gt;
          </li>
          <li className="strk-breadcrumb-item" aria-current="page">
            <span className="strk-breadcrumb-current">{s.breadcrumb.current}</span>
          </li>
        </ol>
      </div>
    </nav>
  );
}

import React from 'react';

export default function TopBar({ s }) {
  return (
    <header className="strk-topbar" role="banner">
      <div className="strk-container strk-topbar-inner">
        <a href="/" className="strk-logo" aria-label={s.topBar.ariaLabel}>
          <span className="strk-logo-mark">{s.site.logoMark}</span>
          <span className="strk-logo-suffix">{s.site.logoSuffix}</span>
        </a>
      </div>
    </header>
  );
}

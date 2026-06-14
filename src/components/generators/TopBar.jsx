import React from 'react';

const TopBar = ({ t }) => (
  <header className="strk-topbar" role="banner">
    <div className="strk-container strk-topbar__inner">
      <a
        className="strk-logo"
        href="/"
        aria-label={`Strikingly home, ${t('topBar.logo')}`}
      >
        strikingly <span className="strk-logo__mark">AI</span>
      </a>
      <button
        type="button"
        className="strk-topbar__locale"
        aria-label="Change language"
      >
        <span aria-hidden="true">EN</span>
        <span className="strk-vh">English</span>
      </button>
    </div>
  </header>
);

export default TopBar;

import React from 'react';

export default function Footer({ s }) {
  return (
    <footer className="strk-footer" role="contentinfo">
      <div className="strk-container">
        <div className="strk-footer-top">
          <div className="strk-footer-brand">
            <a href="/" className="strk-logo strk-logo-footer" aria-label={s.topBar.ariaLabel}>
              <span className="strk-logo-mark">{s.site.logoMark}</span>
              <span className="strk-logo-suffix">{s.site.logoSuffix}</span>
            </a>
            <p className="strk-footer-tagline">{s.footer.tagline}</p>
          </div>
          <nav className="strk-footer-cols" aria-label="Footer">
            {s.footer.columns.map((col) => (
              <div key={col.title} className="strk-footer-col">
                <h3 className="strk-footer-col-title">{col.title}</h3>
                <ul role="list">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="strk-footer-bottom">
          <p>{s.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

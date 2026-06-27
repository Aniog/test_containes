import React from "react";
import { strings } from "../strings";

export default function Footer() {
  const s = strings.en.footer;
  const brand = strings.en.brand;
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">
              {brand.logo}
              <span className="footer__brand-ai"> {brand.logoAi}</span>
            </div>
            <p className="footer__about">{s.tagline}</p>
          </div>
          {s.cols.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h4 className="footer__col-title">{col.title}</h4>
              <ul className="footer__list" role="list">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a className="footer__link" href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <p className="footer__copy">{s.copyright}</p>
      </div>
    </footer>
  );
}
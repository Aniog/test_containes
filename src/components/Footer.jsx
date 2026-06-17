import React from 'react';
import { strings } from '../data/strings';

const s = strings.en;
const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <a href="/" className="footer-logo" aria-label="Strikingly Home">
              {s.logo}
            </a>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">{s.footerProduct}</h4>
            <ul className="footer-links">
              <li><a href="/pricing">{s.footerPricing}</a></li>
              <li><a href="/templates">{s.footerTemplates}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">{s.footerResources}</h4>
            <ul className="footer-links">
              <li><a href="/blog">{s.footerBlog}</a></li>
              <li><a href="/support">{s.footerSupport}</a></li>
              <li><a href="/about">{s.footerAbout}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">{s.footerLegal}</h4>
            <ul className="footer-links">
              <li><a href="/terms">{s.footerTerms}</a></li>
              <li><a href="/privacy">{s.footerPrivacy}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{s.footerCopyright(currentYear)}</p>
        </div>
      </div>
    </footer>
  );
}

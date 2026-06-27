import React from "react";
import { strings } from "../../data/strings";

export default function Footer() {
  const s = strings.en;
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <span className="footer-logo">{s.logo}</span>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">{s.footerProduct}</h4>
            <ul className="footer-links">
              <li><a href="/pricing">{s.footerPricing}</a></li>
              <li><a href="/templates">{s.footerTemplates}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">{s.footerCompany}</h4>
            <ul className="footer-links">
              <li><a href="/about">{s.footerAbout}</a></li>
              <li><a href="/blog">{s.footerBlog}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">{s.footerSupport}</h4>
            <ul className="footer-links">
              <li><a href="/support">{s.footerHelpCenter}</a></li>
              <li><a href="/support">{s.footerContact}</a></li>
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
          <p>{s.footerCopyright(year)}</p>
        </div>
      </div>
    </footer>
  );
}

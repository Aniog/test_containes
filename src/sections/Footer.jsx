import React from "react";
import { strings } from "../strings";
import { LogoMark, ChevronDownIcon } from "../icons.jsx";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="strk-footer" role="contentinfo">
      <div className="strk-container">
        <div className="strk-footer-grid">
          <div className="strk-footer-col">
            <a href="/" className="strk-logo" aria-label={`${strings.en.logoText} home`}>
              <LogoMark size={22} />
              <span style={{ marginInlineStart: 8 }}>
                <span style={{ color: "var(--color-brand-purple)" }}>strikingly</span>{" "}
                <span style={{ color: "var(--color-heading)" }}>{strings.en.logoSuffix}</span>
              </span>
            </a>
            <p style={{ marginBlockStart: 12, fontSize: 13, color: "var(--color-body)" }}>
              {strings.en.footerLogoTagline}
            </p>
            <div style={{ marginBlockStart: 14 }}>
              <button type="button" className="strk-locale" aria-label="Choose language">
                {strings.en.localeEnglish}
                <ChevronDownIcon size={12} color="#4B5056" />
              </button>
            </div>
          </div>
          <div className="strk-footer-col">
            <h4>{strings.en.footerColProducts}</h4>
            <ul>
              <li><a href="/s/ai_site_builder">AI Site Builder</a></li>
              <li><a href="/templates">{strings.en.footerLinkTemplates}</a></li>
              <li><a href="/pricing">{strings.en.footerLinkPricing}</a></li>
              <li><a href="/generators">AI Generators</a></li>
            </ul>
          </div>
          <div className="strk-footer-col">
            <h4>{strings.en.footerColResources}</h4>
            <ul>
              <li><a href="/blog">{strings.en.footerLinkBlog}</a></li>
              <li><a href="/support">{strings.en.footerLinkSupport}</a></li>
              <li><a href="/about">{strings.en.footerLinkAbout}</a></li>
            </ul>
          </div>
          <div className="strk-footer-col">
            <h4>{strings.en.footerColCompany}</h4>
            <ul>
              <li><a href="/about">{strings.en.footerLinkAbout}</a></li>
              <li><a href="/blog">{strings.en.footerLinkBlog}</a></li>
              <li><a href="/support">{strings.en.footerLinkSupport}</a></li>
            </ul>
          </div>
          <div className="strk-footer-col">
            <h4>{strings.en.footerColLegal}</h4>
            <ul>
              <li><a href="/terms">{strings.en.footerLinkTerms}</a></li>
              <li><a href="/privacy">{strings.en.footerLinkPrivacy}</a></li>
            </ul>
          </div>
        </div>
        <div className="strk-footer-bottom">
          {strings.en.footerCopyright(year)}
        </div>
      </div>
    </footer>
  );
}
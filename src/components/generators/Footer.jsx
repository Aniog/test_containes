





import React from 'react';
import strings from '@/data/strings.en.js';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="section-container footer-inner">
        <div className="footer-brand">
          <a href="/" className="footer-logo" aria-label="Strikingly home">
            <svg
              width="24"
              height="24"
              viewBox="0 0 28 28"
              fill="none"
              aria-hidden="true"
            >
              <rect width="28" height="28" rx="6" fill="url(#ai-grad-footer)" />
              <text
                x="14"
                y="19"
                textAnchor="middle"
                fill="white"
                fontSize="14"
                fontWeight="700"
                fontFamily="Josefin Sans, sans-serif"
              >
                S
              </text>
              <defs>
                <linearGradient id="ai-grad-footer" x1="0" y1="0" x2="28" y2="28">
                  <stop stopColor="#7671FF" />
                  <stop offset="1" stopColor="#CB0C9F" />
                </linearGradient>
              </defs>
            </svg>
            <span className="footer-logo-text">strikingly</span>
          </a>
        </div>
        <div className="footer-links">
          {strings.footerLinks.map((link) => (
            <a key={link.text} href={link.href} className="footer-link">
              {link.text}
            </a>
          ))}
        </div>
        <p className="footer-copyright">{strings.footerCopyright}</p>
      </div>
    </footer>
  );
};

export default Footer;





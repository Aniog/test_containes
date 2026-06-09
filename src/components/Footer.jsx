import React from 'react';
import { strings } from '../strings';

export const ClosingCTA = () => {
  const s = strings.en.closingCta;
  return (
    <section className="py-20 bg-white border-t border-[var(--divider)]">
      <div className="container-custom text-center">
        <h2 className="mb-4 text-[var(--heading-dark)]">{s.title}</h2>
        <p className="mb-8 text-[var(--body-text)]">{s.subtitle}</p>
        <a href="/s/ai_site_builder" className="btn btn-big btn-primary min-w-[240px]">
          {s.button}
        </a>
      </div>
    </section>
  );
};

export const Footer = () => {
  const s = strings.en.footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-[var(--bg-light)]">
      <div className="container-custom">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5 mb-12">
          <div className="lg:col-span-2">
            <span className="text-[20px] font-bold tracking-tighter text-[var(--heading-dark)] uppercase block mb-4" style={{ fontFamily: 'Josefin Sans' }}>
              strikingly <span className="ai-text-gradient">AI</span>
            </span>
            <p className="max-w-[300px] text-[13px] opacity-70">
              The AI-powered website builder that helps you go live in seconds. Beautiful, responsive, and free to start.
            </p>
          </div>
          <div>
            <h4 className="text-[12px] font-bold mb-4 opacity-40">PRODUCT</h4>
            <ul className="space-y-2">
              {s.links.slice(0, 3).map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-[14px] hover:text-[var(--brand-purple)] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-bold mb-4 opacity-40">RESOURCES</h4>
            <ul className="space-y-2">
              {s.links.slice(3, 5).map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-[14px] hover:text-[var(--brand-purple)] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-bold mb-4 opacity-40">LEGAL</h4>
            <ul className="space-y-2">
              {s.links.slice(5).map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-[14px] hover:text-[var(--brand-purple)] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-[var(--divider)] opacity-50">
          <p className="text-[12px]">
            {s.copyright.replace('{year}', currentYear)}
          </p>
        </div>
      </div>
    </footer>
  );
};

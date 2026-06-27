import React, { useState, useEffect, useRef } from 'react';
import { strings } from './strings';
import { Zap, Smartphone, CreditCard, ChevronDown, Search, ArrowRight, Menu, X } from 'lucide-react';

const Layout = ({ children }) => {
  const t = strings.en;
  
  return (
    <div className="min-h-screen bg-white font-body text-body-text selection:bg-brand-purple/20">
      <header className="sticky top-0 z-50 border-b border-subtle-divider bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-10 h-[60px] flex items-center">
          <a href="/" className="flex items-center gap-2">
            <span className="font-heading text-xl font-bold tracking-tight text-brand-purple">
              strikingly <span className="ai-gradient-text">AI</span>
            </span>
          </a>
        </div>
      </header>
      
      <main>
        {children}
      </main>

      <footer className="border-t border-subtle-divider bg-light-bg py-[40px]">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
            <div className="col-span-2 md:col-span-1">
              <span className="font-heading text-xl font-bold text-brand-purple block mb-5">
                strikingly <span className="ai-gradient-text">AI</span>
              </span>
              <p className="text-xs max-w-[200px]">{t.hero.subheadline}</p>
            </div>
            {t.footer.columns.map((col, idx) => (
              <div key={idx}>
                <h4 className="text-heading-text mb-5 text-[14px]">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a href={link.href} className="text-sm hover:text-brand-purple transition-colors">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-10 border-t border-subtle-divider flex flex-col md:flex-row justify-between items-center gap-5">
            <p className="text-xs">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

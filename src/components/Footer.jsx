import React from 'react';
import { strings } from '../data/generators';

const Footer = () => {
  const { footer } = strings.en;

  return (
    <footer className="bg-bg-light pt-16 pb-10 border-t border-divider">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="text-xl font-heading font-bold text-hero-line1 uppercase">
                Strikingly <span className="ai-gradient-text">AI</span>
              </span>
            </a>
            <p className="text-sm text-body-text max-w-xs">
              Empowering everyone to build their own piece of the internet with the power of artificial intelligence.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-heading font-bold text-hero-line1 mb-6 uppercase tracking-wider">Product</h4>
            <ul className="flex flex-col gap-3 text-sm text-body-text">
              <li><a href="/templates" className="hover:text-brand-purple transition-colors">{footer.templates}</a></li>
              <li><a href="/pricing" className="hover:text-brand-purple transition-colors">{footer.pricing}</a></li>
              <li><a href="/about" className="hover:text-brand-purple transition-colors">{footer.about}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-heading font-bold text-hero-line1 mb-6 uppercase tracking-wider">Resources</h4>
            <ul className="flex flex-col gap-3 text-sm text-body-text">
              <li><a href="/support" className="hover:text-brand-purple transition-colors">{footer.support}</a></li>
              <li><a href="/blog" className="hover:text-brand-purple transition-colors">{footer.blog}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-heading font-bold text-hero-line1 mb-6 uppercase tracking-wider">Legal</h4>
            <ul className="flex flex-col gap-3 text-sm text-body-text">
              <li><a href="/terms" className="hover:text-brand-purple transition-colors">{footer.terms}</a></li>
              <li><a href="/privacy" className="hover:text-brand-purple transition-colors">{footer.privacy}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-divider pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-body-text">
            {footer.copyright}
          </p>
          <div className="flex items-center gap-6 grayscale opacity-50">
            {/* Simple social icons placeholders */}
            <div className="w-5 h-5 bg-card-border rounded-full" />
            <div className="w-5 h-5 bg-card-border rounded-full" />
            <div className="w-5 h-5 bg-card-border rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-subtle-divider py-16 md:py-20">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-1 mb-6">
              <span className="font-heading text-lg text-h1-line1-text lowercase tracking-tight">strikingly</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading text-xs uppercase tracking-wider text-[#4B5056] mb-6">Product</h4>
            <ul className="space-y-4 text-xs text-[#636972]">
              <li><a href="/templates" className="hover:text-brand-purple">Templates</a></li>
              <li><a href="/pricing" className="hover:text-brand-purple">Pricing</a></li>
              <li><a href="/s/ai_site_builder" className="hover:text-brand-purple">AI Builder</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-xs uppercase tracking-wider text-[#4B5056] mb-6">Resources</h4>
            <ul className="space-y-4 text-xs text-[#636972]">
              <li><a href="/support" className="hover:text-brand-purple">Support</a></li>
              <li><a href="/blog" className="hover:text-brand-purple">Blog</a></li>
              <li><a href="/about" className="hover:text-brand-purple">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-xs uppercase tracking-wider text-[#4B5056] mb-6">Legal</h4>
            <ul className="space-y-4 text-xs text-[#636972]">
              <li><a href="/terms" className="hover:text-brand-purple">Terms</a></li>
              <li><a href="/privacy" className="hover:text-brand-purple">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-subtle-divider text-[10px] text-[#C6C9CD] uppercase tracking-widest font-heading">
          <p>© {currentYear} STRIKINGLY. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

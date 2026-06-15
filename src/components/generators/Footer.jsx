import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-divider pt-10 pb-10 mt-10">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          <div className="lg:col-span-1">
             <div className="flex items-center gap-2 mb-4">
              <span className="text-[#2E2E2F] font-heading font-bold text-xl uppercase tracking-tight">strikingly</span>
              <span className="bg-brand-purple text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm uppercase">AI</span>
            </div>
            <p className="text-[12px] text-body-gray">
              Build your presence online in minutes.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-heading-gray uppercase mb-4 text-[14px]">Product</h4>
            <ul className="space-y-2 text-[13px] text-body-gray">
              <li><a href="/templates" className="hover:text-brand-purple">Templates</a></li>
              <li><a href="/pricing" className="hover:text-brand-purple">Pricing</a></li>
              <li><a href="/about" className="hover:text-brand-purple">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-heading-gray uppercase mb-4 text-[14px]">Resources</h4>
            <ul className="space-y-2 text-[13px] text-body-gray">
              <li><a href="/support" className="hover:text-brand-purple">Support</a></li>
              <li><a href="/blog" className="hover:text-brand-purple">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-heading-gray uppercase mb-4 text-[14px]">Legal</h4>
            <ul className="space-y-2 text-[13px] text-body-gray">
              <li><a href="/terms" className="hover:text-brand-purple">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-brand-purple">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-divider pt-6">
          <p className="text-[12px] text-body-gray">
            &copy; {currentYear} Strikingly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

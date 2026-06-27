import React from 'react';

const Footer = ({ copyright, product, resources, company, legal }) => (
  <footer className="w-full bg-[#2E2E2F] py-10 md:py-[40px]">
    <div className="max-w-[1200px] mx-auto px-5">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
        <div className="col-span-2 md:col-span-1">
          <a href="/" className="flex items-center gap-2 mb-4" aria-label="Strikingly Home">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect width="24" height="24" rx="4" fill="#8159BB" />
              <path d="M6 7h12v2.5H12v7.5H9.5V9.5H6V7z" fill="white" />
            </svg>
            <span className="font-heading text-[14px] font-bold uppercase text-white tracking-wide">Strikingly</span>
          </a>
        </div>
        <div>
          <h4 className="font-heading text-[12px] font-bold uppercase text-white mb-3">{product}</h4>
          <ul className="list-none p-0 m-0 space-y-2">
            <li><a href="/s/ai_site_builder" className="text-[13px] text-[#9CA3AF] hover:text-white transition-colors no-underline">AI Site Builder</a></li>
            <li><a href="/templates" className="text-[13px] text-[#9CA3AF] hover:text-white transition-colors no-underline">Templates</a></li>
            <li><a href="/pricing" className="text-[13px] text-[#9CA3AF] hover:text-white transition-colors no-underline">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-[12px] font-bold uppercase text-white mb-3">{resources}</h4>
          <ul className="list-none p-0 m-0 space-y-2">
            <li><a href="/blog" className="text-[13px] text-[#9CA3AF] hover:text-white transition-colors no-underline">Blog</a></li>
            <li><a href="/support" className="text-[13px] text-[#9CA3AF] hover:text-white transition-colors no-underline">Support</a></li>
            <li><a href="/generators" className="text-[13px] text-[#9CA3AF] hover:text-white transition-colors no-underline">Generators</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-[12px] font-bold uppercase text-white mb-3">{company}</h4>
          <ul className="list-none p-0 m-0 space-y-2">
            <li><a href="/about" className="text-[13px] text-[#9CA3AF] hover:text-white transition-colors no-underline">About</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-[12px] font-bold uppercase text-white mb-3">{legal}</h4>
          <ul className="list-none p-0 m-0 space-y-2">
            <li><a href="/terms" className="text-[13px] text-[#9CA3AF] hover:text-white transition-colors no-underline">Terms</a></li>
            <li><a href="/privacy" className="text-[13px] text-[#9CA3AF] hover:text-white transition-colors no-underline">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#4B5056] pt-5">
        <p className="text-[12px] text-[#9CA3AF] text-center">{copyright}</p>
      </div>
    </div>
  </footer>
);

export default Footer;

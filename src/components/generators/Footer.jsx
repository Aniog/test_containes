import React from 'react';
import { strings } from '@/data/strings';

const s = strings.en;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-heading-dark py-[40px]">
      <div className="section-wrapper">
        <div className="flex items-center gap-2 mb-[30px]">
          <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect width="28" height="28" rx="6" fill="#8159BB" />
            <path d="M8 8h12v3H11v2h7v3h-7v4H8V8z" fill="white" />
          </svg>
          <span className="font-heading font-bold text-[14px] text-white tracking-wide">
            {s.topBar.logo}
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] mb-[30px]">
          <div>
            <h4 className="font-heading font-bold text-[12px] text-white uppercase mb-[10px]">
              {s.footer.product}
            </h4>
            <ul className="list-none p-0 m-0 space-y-[6px]">
              <li><a href="/pricing" className="text-[13px] text-gray-400 hover:text-white transition-colors no-underline">{s.footer.links.pricing}</a></li>
              <li><a href="/templates" className="text-[13px] text-gray-400 hover:text-white transition-colors no-underline">{s.footer.links.templates}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-[12px] text-white uppercase mb-[10px]">
              {s.footer.resources}
            </h4>
            <ul className="list-none p-0 m-0 space-y-[6px]">
              <li><a href="/blog" className="text-[13px] text-gray-400 hover:text-white transition-colors no-underline">{s.footer.links.blog}</a></li>
              <li><a href="/support" className="text-[13px] text-gray-400 hover:text-white transition-colors no-underline">{s.footer.links.support}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-[12px] text-white uppercase mb-[10px]">
              {s.footer.company}
            </h4>
            <ul className="list-none p-0 m-0 space-y-[6px]">
              <li><a href="/about" className="text-[13px] text-gray-400 hover:text-white transition-colors no-underline">{s.footer.links.about}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-[12px] text-white uppercase mb-[10px]">
              {s.footer.legal}
            </h4>
            <ul className="list-none p-0 m-0 space-y-[6px]">
              <li><a href="/terms" className="text-[13px] text-gray-400 hover:text-white transition-colors no-underline">{s.footer.links.terms}</a></li>
              <li><a href="/privacy" className="text-[13px] text-gray-400 hover:text-white transition-colors no-underline">{s.footer.links.privacy}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-[20px]">
          <p className="text-[12px] text-gray-500 m-0">
            {s.footer.copyright.replace('{year}', year)}
          </p>
        </div>
      </div>
    </footer>
  );
}

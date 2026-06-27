import React from 'react';
import strings from '../strings';

const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'AI Site Builder', href: '/s/ai_site_builder' },
      { label: 'Templates', href: '/templates' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/support' },
      { label: 'Contact', href: '/support' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms', href: '/terms' },
      { label: 'Privacy', href: '/privacy' },
    ],
  },
];

export default function Footer() {
  const t = strings.en;

  return (
    <footer className="bg-[#F4F6F8] py-[40px] mt-[60px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px] mb-[30px]">
          {/* Logo column */}
          <div>
            <span className="font-heading font-bold text-[14px] text-[#2E2E2F] block mb-[15px]">
              {t.logo}
            </span>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <span className="font-heading font-bold text-[12px] text-[#2E2E2F] block mb-[12px]">
                {col.title.toUpperCase()}
              </span>
              <ul className="list-none m-0 p-0 flex flex-col gap-[8px]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-[#636972] no-underline hover:text-brand-purple transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[#E2E4E7] pt-[20px] text-center text-[12px] text-[#636972]">
          {t.footerCopyright}
        </div>
      </div>
    </footer>
  );
}

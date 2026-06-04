import React from 'react';
import strings from '@/data/strings.en.js';

const footerColumns = [
  { heading: 'Product', links: [{ text: 'Pricing', href: '/pricing' }, { text: 'Templates', href: '/templates' }, { text: 'AI Site Builder', href: '/s/ai_site_builder' }, { text: 'Generators', href: '/generators' }] },
  { heading: 'Company', links: [{ text: 'About', href: '/about' }, { text: 'Blog', href: '/blog' }, { text: 'Careers', textOnly: true }] },
  { heading: 'Support', links: [{ text: 'Help Center', href: '/support' }, { text: 'Contact Us', textOnly: true }, { text: 'Community', textOnly: true }] },
  { heading: 'Legal', links: [{ text: 'Terms of Service', href: '/terms' }, { text: 'Privacy Policy', href: '/privacy' }] },
];

export default function Footer() {
  return (
    <footer className="py-[40px] border-t border-subtle-divider" style={{ background: '#FFFFFF' }}>
      <div className="max-content section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px] mb-[30px]">
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h4 className="font-heading font-bold text-[13px] uppercase text-heading-gray m-0 mb-[12px]">
                {col.heading}
              </h4>
              <ul className="list-none m-0 p-0 flex flex-col gap-[8px]">
                {col.links.map((link) => (
                  <li key={link.text}>
                    {link.href ? (
                      <a href={link.href} className="text-[13px] text-body-gray hover:text-brand-purple transition-colors focus-ring">
                        {link.text}
                      </a>
                    ) : (
                      <span className="text-[13px] text-body-gray">{link.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-subtle-divider pt-[20px] text-center">
          <p className="text-[12px] text-body-gray m-0">
            {strings.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
import React from 'react';
import { t } from '../../data/generatorsData';

const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/about' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Templates', href: '/templates' },
      { label: 'AI Builder', href: '/s/ai_site_builder' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Support', href: '/support' },
      { label: 'Help Center', href: '/support' },
      { label: 'Status', href: '/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/about' },
      { label: 'Press', href: '/about' },
      { label: 'Contact', href: '/support' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Cookie Policy', href: '/privacy' },
    ],
  },
];

const Footer = () => (
  <footer className="bg-white border-t border-subtle-divider py-12">
    <div className="max-w-content mx-auto px-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h4 className="font-heading text-heading-darker text-xs mb-4">
              {col.title}
            </h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-body-gray text-sm hover:text-brand-purple transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="pt-6 border-t border-subtle-divider flex flex-col md:flex-row items-center justify-between gap-4">
        <a
          href="/"
          className="font-heading text-heading-darker text-sm tracking-wide hover:opacity-80 transition-opacity"
        >
          {t('topBarLogo')}
        </a>
        <p className="text-body-gray text-xs">
          {t('footerCopyright', { year: new Date().getFullYear() })}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

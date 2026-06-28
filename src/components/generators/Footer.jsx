import { t } from '@/data/strings';

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
      { label: 'Support', href: '/support' },
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

const Footer = () => (
  <footer className="border-t border-[#E2E4E7] bg-white">
    <div className="max-w-[1200px] mx-auto px-5 py-10 md:py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <a href="/" className="font-[family-name:var(--font-headings)] font-bold uppercase text-[16px] tracking-wide text-[#2E2E2F]">
            strikingly <span className="text-[#8159BB]">AI</span>
          </a>
        </div>
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h3 className="font-[family-name:var(--font-headings)] font-bold uppercase text-[12px] text-[#4B5056] tracking-wide">
              {col.title}
            </h3>
            <ul className="mt-3 space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-[#636972] hover:text-[#8159BB] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 pt-6 border-t border-[#E2E4E7] text-[12px] text-[#A0A4AA]">
        {t('footerCopyright')}
      </div>
    </div>
  </footer>
);

export default Footer;

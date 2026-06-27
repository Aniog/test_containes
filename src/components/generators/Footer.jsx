export default function Footer({ t }) {
  const columns = [
    {
      title: 'Product',
      links: [
        { label: 'Templates', href: '/templates' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'AI Site Builder', href: '/s/ai_site_builder' },
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
      title: 'Resources',
      links: [
        { label: 'Help Center', href: '/support' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' },
      ],
    },
  ];

  return (
    <footer className="border-t border-divider py-10 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-bold text-[12px] text-heading-section uppercase mb-3">{col.title}</h4>
              <ul className="list-none m-0 p-0 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-body-text text-[13px] hover:text-brand-purple transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-divider">
          <a href="/" className="flex items-center gap-2 font-heading font-bold text-heading-dark text-[14px] uppercase">
            <svg width="20" height="20" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <rect width="28" height="28" rx="6" fill="#8159BB"/>
              <path d="M8 14h12M14 8v12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            strikingly
          </a>
          <p className="text-body-text text-[12px]">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

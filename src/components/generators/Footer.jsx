import strings from '@/strings.en.js';

const columns = [
  {
    title: 'Product',
    links: [
      { label: strings.footerTemplates, href: '/templates' },
      { label: strings.footerPricing, href: '/pricing' },
      { label: 'Features', href: null },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: strings.footerAbout, href: '/about' },
      { label: strings.footerBlog, href: '/blog' },
      { label: 'Careers', href: null },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: strings.footerSupport, href: '/support' },
      { label: 'Contact', href: null },
      { label: 'Help Center', href: null },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: strings.footerTerms, href: '/terms' },
      { label: strings.footerPrivacy, href: '/privacy' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-bg-light border-t border-divider py-[40px]">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px] mb-[30px]">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-bold uppercase text-[13px] text-heading-dark mb-[10px]">
                {col.title}
              </h4>
              <ul className="list-none p-0 m-0 space-y-[5px]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a href={link.href} className="text-[13px] text-body hover:text-heading-dark transition-colors">
                        {link.label}
                      </a>
                    ) : (
                      <span className="text-[13px] text-body">{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-divider pt-[20px] flex flex-col sm:flex-row items-center justify-between gap-[10px]">
          <a href="/" className="font-heading font-bold text-[16px] text-heading-dark">
            {strings.logo}
          </a>
          <p className="text-[12px] text-body">
            {strings.footerCopyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
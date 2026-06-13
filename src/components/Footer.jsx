import strings from '../strings.en.js';

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
      { label: 'Terms', href: '/terms' },
      { label: 'Privacy', href: '/privacy' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/support' },
    ],
  },
  {
    title: 'More',
    links: [
      { label: 'Generators', href: '/generators' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-light-bg border-t border-subtle-divider py-[40px]">
      <div className="max-w-content mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px] mb-[30px]">
          <div>
            <a href="/" className="flex items-center gap-2 no-underline text-inherit mb-[15px]">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect width="28" height="28" rx="6" fill="url(#footer-logo-grad)" />
                <defs>
                  <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="28" y2="28">
                    <stop stopColor="#7671FF" />
                    <stop offset="1" stopColor="#CB0C9F" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-heading font-bold text-[13px] uppercase text-heading-dark">
                {strings.topBarLogo}
              </span>
            </a>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-bold text-[12px] uppercase text-heading-gray m-0 mb-[10px]">
                {col.title}
              </h4>
              <ul className="list-none m-0 p-0 flex flex-col gap-[5px]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-body-gray hover:text-heading-dark no-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-subtle-divider pt-[20px] text-center">
          <p className="text-[12px] text-body-gray m-0">
            {strings.footerCopyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
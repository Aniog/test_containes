const footerLinks = [
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
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/support' },
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

const Footer = ({ t }) => {
  return (
    <footer className="border-t border-divider py-[40px] bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px] mb-[30px]">
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading text-[12px] text-heading-section uppercase mb-[10px]">
                {col.title}
              </h4>
              <ul className="list-none m-0 p-0 flex flex-col gap-[8px]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-body-text text-[13px] hover:text-brand-purple transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-divider pt-[20px]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-[10px]">
            <span className="font-heading text-[14px] text-heading-dark">
              strikingly AI
            </span>
            <span className="text-body-text text-[12px]">
              {t.footer.copyright}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const footerLinks = {
  Product: [
    { label: 'Templates', href: '/templates' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'AI Site Builder', href: '/s/ai_site_builder' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
  ],
  Support: [
    { label: 'Help Center', href: '/support' },
  ],
  Legal: [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
};

export default function Footer({ t }) {
  return (
    <footer className="border-t border-divider py-[40px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-[30px] mb-[30px]">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <span className="font-heading text-[16px] text-heading-dark">strikingly AI</span>
          </div>
          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading text-[12px] text-heading m-0 mb-[10px]">{title}</h4>
              <ul className="list-none m-0 p-0 space-y-[8px]">
                {links.map((link) => (
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
        <div className="border-t border-divider pt-[20px]">
          <p className="text-body-text text-[12px] m-0">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

import { strings } from '../../data/strings'

const t = strings.en.footer

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
}

export default function Footer() {
  return (
    <footer className="border-t border-divider py-10 bg-white">
      <div className="max-w-content mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <span className="block font-heading font-bold uppercase text-heading-dark text-xs mb-3">
                {heading}
              </span>
              <ul className="list-none m-0 p-0 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-body-text font-body text-sm hover:text-brand-purple transition-colors focus-ring rounded"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-5 border-t border-divider flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-1.5 focus-ring rounded">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect width="24" height="24" rx="4" fill="#8159BB"/>
              <path d="M7 8h10M7 12h7M7 16h10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="font-heading font-bold text-heading-dark text-sm uppercase">
              Strikingly
            </span>
          </a>
          <p className="text-body-text font-body text-xs">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

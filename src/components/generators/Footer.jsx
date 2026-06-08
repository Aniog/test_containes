import { strings } from '@/data/strings'

const t = strings.en.footer

const footerLinks = {
  Product: [
    { label: 'AI Site Builder', href: '/s/ai_site_builder' },
    { label: 'Templates', href: '/templates' },
    { label: 'Pricing', href: '/pricing' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Support', href: '/support' },
  ],
  Resources: [
    { label: 'AI Generators', href: '/generators' },
    { label: 'Help Center', href: '/support' },
  ],
  Legal: [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
}

const Footer = () => {
  return (
    <footer className="border-t border-divider bg-white py-10">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <span className="font-heading text-heading-dark text-sm">
              strikingly <span className="ai-gradient-text">AI</span>
            </span>
          </div>
          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <span className="font-heading text-heading-dark text-xs block mb-3">{title}</span>
              <ul className="list-none m-0 p-0 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-body-text text-sm hover:text-brand-purple transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-divider pt-5">
          <p className="text-body-text text-xs text-center">{t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

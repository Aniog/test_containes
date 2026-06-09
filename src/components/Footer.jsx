import { Linkedin, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  products: [
    { label: 'Double Folding Machine', href: '#products' },
    { label: 'Double Folder', href: '#products' },
    { label: 'Sheet Metal Folder', href: '#products' },
    { label: 'Sheet Metal Folding Machine', href: '#products' },
    { label: 'Metal Folder', href: '#products' },
    { label: 'Metal Folding Machine', href: '#products' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#about' },
    { label: 'Careers', href: '#contact' },
    { label: 'News & Events', href: '#about' },
  ],
  support: [
    { label: 'Contact Us', href: '#contact' },
    { label: 'Technical Support', href: '#contact' },
    { label: 'Spare Parts', href: '#contact' },
    { label: 'Documentation', href: '#products' },
  ],
}

const handleNav = (e, href) => {
  e.preventDefault()
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/5">
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-white font-bold text-lg tracking-wider uppercase">
                ARTITECT
              </span>
              <span className="text-brand-gold font-bold text-lg tracking-wider uppercase">
                MACHINERY
              </span>
            </div>
            <p className="text-brand-muted text-sm leading-relaxed mb-6 max-w-sm">
              Precision-engineered sheet metal folding machines built for performance. Trusted by manufacturers across the globe for over 30 years.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-brand-muted hover:text-brand-gold hover:bg-brand-gold/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-brand-muted hover:text-brand-gold hover:bg-brand-gold/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-brand-muted hover:text-brand-gold hover:bg-brand-gold/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Products
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.products.slice(0, 4).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="text-brand-muted text-sm hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="text-brand-muted text-sm hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="text-brand-muted text-sm hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Newsletter
            </h4>
            <p className="text-brand-muted text-sm mb-3">
              Stay updated with our latest products and industry news.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-l-sm px-3 py-2 text-sm text-white placeholder:text-brand-muted focus:outline-none focus:border-brand-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-brand-gold text-brand-dark text-sm font-semibold px-3 py-2 rounded-r-sm hover:bg-brand-gold-hover transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-muted text-xs">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-brand-muted text-xs hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-brand-muted text-xs hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-brand-muted text-xs hover:text-white transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

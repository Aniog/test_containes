import { ChevronUp } from 'lucide-react'

const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#features', label: 'Why Us' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold tracking-tight">ARTITECT</span>
              <span className="text-xl font-light tracking-wider text-brand-accent-light">MACHINERY</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Precision metal folding solutions for modern manufacturing.
              Engineered for accuracy. Built to last.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-brand-accent-light text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-5">Get in Touch</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li>
                <a href="mailto:info@artitectmachinery.com" className="hover:text-brand-accent-light transition-colors">
                  info@artitectmachinery.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="hover:text-brand-accent-light transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="text-white/60">
                300 Innovation Drive<br />Detroit, MI 48226
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white/50 hover:text-brand-accent-light text-xs transition-colors"
          >
            Back to top
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
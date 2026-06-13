import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Supplier Sourcing', path: '/services#sourcing' },
    { label: 'Factory Verification', path: '/services#verification' },
    { label: 'Quality Inspection', path: '/services#inspection' },
    { label: 'Production Follow-Up', path: '/services#production' },
    { label: 'Shipping Coordination', path: '/services#shipping' },
  ],
  company: [
    { label: 'About Us', path: '/how-it-works' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Products We Source', path: '/products' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Blog', path: '/blog' },
  ],
  support: [
    { label: 'Contact Us', path: '/contact' },
    { label: 'Get a Free Quote', path: '/contact' },
    { label: 'FAQ', path: '/#faq' },
    { label: 'Privacy Policy', path: '/' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg leading-none">S</span>
              </div>
              <span className="text-xl font-bold">
                S<span className="text-primary-light">Sourcing</span>
                <span className="text-neutral-300 font-medium text-sm ml-1">China</span>
              </span>
            </Link>
            <p className="text-neutral-300 text-sm leading-relaxed mb-6 max-w-sm">
              Your trusted sourcing partner in China. We help global buyers find reliable suppliers,
              verify factories, inspect quality, and coordinate shipping from factory to door.
            </p>
            <div className="flex flex-col gap-3 text-sm text-neutral-300">
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-primary-light" />
                info@ssourcingchina.com
              </a>
              <a href="tel:+8613612345678" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-primary-light" />
                +86 136-1234-5678
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary-light" />
                Guangzhou, Guangdong, China
              </span>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-neutral-300 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-neutral-300 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white">Support</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-neutral-300 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-neutral-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="font-semibold text-sm text-white mb-1">Get sourcing tips & market updates</h4>
            <p className="text-neutral-400 text-sm">Subscribe to our newsletter. No spam, unsubscribe anytime.</p>
          </div>
          <form className="flex gap-2 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-light flex-1 md:w-64"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1 shrink-0"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-neutral-400">
          <span>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span>Trusted by 500+ global buyers</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

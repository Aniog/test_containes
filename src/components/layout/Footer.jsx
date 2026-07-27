import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Supplier Verification', path: '/services' },
    { name: 'Quality Inspection', path: '/services' },
    { name: 'Production Follow-up', path: '/services' },
    { name: 'Shipping Coordination', path: '/services' },
    { name: 'Factory Audits', path: '/services' },
  ],
  company: [
    { name: 'About Us', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ],
  products: [
    { name: 'Electronics', path: '/products' },
    { name: 'Textiles & Apparel', path: '/products' },
    { name: 'Home & Garden', path: '/products' },
    { name: 'Industrial Equipment', path: '/products' },
    { name: 'Custom Products', path: '/products' },
  ],
}

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-xl font-bold text-white">SSourcing</span>
            </Link>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Your trusted China sourcing agent. We help global buyers find reliable suppliers,
              verify factories, inspect quality, and coordinate shipping.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <Mail size={16} />
                <span className="text-sm">info@ssourcingchina.com</span>
              </a>
              <a href="tel:+86-21-1234-5678" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <Phone size={16} />
                <span className="text-sm">+86-21-1234-5678</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin size={16} />
                <span className="text-sm">Shanghai, China</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-max flex flex-col sm:flex-row items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <Link to="/privacy" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
              Terms of Service
            </Link>
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} className="text-slate-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

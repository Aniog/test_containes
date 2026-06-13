import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, ArrowUp } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Supplier Verification', path: '/services' },
    { label: 'Quality Inspection', path: '/services' },
    { label: 'Production Monitoring', path: '/services' },
    { label: 'Shipping Coordination', path: '/services' },
    { label: 'Factory Audits', path: '/services' },
  ],
  company: [
    { label: 'About Us', path: '/' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact Us', path: '/contact' },
  ],
  products: [
    { label: 'Electronics', path: '/products' },
    { label: 'Home & Garden', path: '/products' },
    { label: 'Apparel & Textiles', path: '/products' },
    { label: 'Industrial Equipment', path: '/products' },
    { label: 'Custom Manufacturing', path: '/products' },
  ],
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-white font-extrabold text-sm">SS</span>
              </div>
              <span className="text-lg font-bold">
                SSourcing<span className="text-accent">China</span>
              </span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-6 max-w-sm">
              Your trusted sourcing partner in China. We help global buyers find reliable
              suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-3 text-blue-200 hover:text-white text-sm transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                info@ssourcingchina.com
              </a>
              <a href="tel:+86-755-8888-0000" className="flex items-center gap-3 text-blue-200 hover:text-white text-sm transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                +86 755-8888-0000
              </a>
              <div className="flex items-center gap-3 text-blue-200 text-sm">
                <MapPin className="w-4 h-4 shrink-0" />
                Shenzhen, Guangdong, China
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-blue-200 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-blue-200 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-blue-200 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-300 text-xs">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-blue-300 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 bg-blue-800 hover:bg-blue-700 rounded-lg transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

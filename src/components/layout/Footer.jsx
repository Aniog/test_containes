import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Supplier Verification', path: '/services' },
    { name: 'Quality Control', path: '/services' },
    { name: 'Factory Audits', path: '/services' },
    { name: 'Production Follow-up', path: '/services' },
    { name: 'Shipping Coordination', path: '/services' },
  ],
  company: [
    { name: 'About Us', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ],
  products: [
    { name: 'Electronics', path: '/products' },
    { name: 'Home & Garden', path: '/products' },
    { name: 'Apparel & Textiles', path: '/products' },
    { name: 'Industrial Equipment', path: '/products' },
    { name: 'Custom Products', path: '/products' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white rounded-md flex items-center justify-center">
                <span className="text-primary font-bold text-sm">SS</span>
              </div>
              <span className="font-bold text-lg tracking-tight">
                SSourcing<span className="text-accent">China</span>
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Your trusted China sourcing partner. We help global buyers find
              reliable suppliers, verify factories, and manage the entire
              procurement process.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 text-white/70 text-sm hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                info@ssourcingchina.com
              </a>
              <a href="tel:+862161234567" className="flex items-center gap-2 text-white/70 text-sm hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                +86 21-6123-4567
              </a>
              <div className="flex items-start gap-2 text-white/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Room 1205, World Trade Center, Shanghai, China 200120
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/70 text-sm hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/70 text-sm hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Product Categories</h4>
            <ul className="space-y-2.5">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/70 text-sm hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            &copy; 2026 SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-white/50 text-sm hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-white/50 text-sm hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

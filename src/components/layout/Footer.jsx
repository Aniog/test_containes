import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Supplier Verification', href: '/services#supplier-verification' },
    { name: 'Quality Control', href: '/services#quality-control' },
    { name: 'Factory Audits', href: '/services#factory-audits' },
    { name: 'Production Monitoring', href: '/services#production-monitoring' },
    { name: 'Shipping Coordination', href: '/services#shipping' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  products: [
    { name: 'Electronics', href: '/products#electronics' },
    { name: 'Home & Garden', href: '/products#home-garden' },
    { name: 'Apparel & Textiles', href: '/products#apparel' },
    { name: 'Industrial Equipment', href: '/products#industrial' },
    { name: 'Custom Products', href: '/products#custom' },
  ],
}

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">
                SSourcing <span className="text-secondary">China</span>
              </span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Your trusted China sourcing agent. We help global buyers find reliable
              suppliers, verify factories, ensure quality, and coordinate shipping.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-white/80">
                  Guangzhou, Guangdong, China
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-white/80">+86 138 0000 0000</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-white/80">info@ssourcingchina.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Clock className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-white/80">Mon-Fri: 9:00 AM - 6:00 PM (GMT+8)</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

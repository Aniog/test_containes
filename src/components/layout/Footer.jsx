import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Supplier Verification', href: '/services#supplier-verification' },
    { name: 'Quality Inspection', href: '/services#quality-inspection' },
    { name: 'Production Follow-up', href: '/services#production-followup' },
    { name: 'Shipping Coordination', href: '/services#shipping' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
  ],
  resources: [
    { name: 'Products We Source', href: '/products' },
    { name: 'FAQ', href: '/contact#faq' },
    { name: 'Contact', href: '/contact' },
  ],
}

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">SS</span>
              </div>
              <div>
                <span className="font-bold text-white text-lg">SSourcing</span>
                <span className="text-primary-200 font-medium"> China</span>
              </div>
            </Link>
            <p className="text-primary-200 text-sm leading-relaxed mb-6 max-w-sm">
              Your trusted China sourcing partner. We help overseas buyers find reliable suppliers, 
              verify factories, inspect quality, and coordinate shipping.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 text-sm text-primary-100 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                info@ssourcingchina.com
              </a>
              <a href="tel:+862112345678" className="flex items-center gap-2 text-sm text-primary-100 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                +86 21 1234 5678
              </a>
              <div className="flex items-start gap-2 text-sm text-primary-100">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Shanghai, China</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-200 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-200 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-200 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-300">
              © {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

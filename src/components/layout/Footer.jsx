import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Supplier Verification', path: '/services#verification' },
    { name: 'Quality Inspection', path: '/services#inspection' },
    { name: 'Production Follow-up', path: '/services#production' },
    { name: 'Shipping & Logistics', path: '/services#shipping' },
    { name: 'Product Sourcing', path: '/services#sourcing' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ],
  resources: [
    { name: 'Sourcing Guide', path: '/blog/sourcing-guide' },
    { name: 'QC Checklist', path: '/blog/qc-checklist' },
    { name: 'Shipping FAQ', path: '/blog/shipping-faq' },
    { name: 'China Trade News', path: '/blog' },
  ],
}

const Footer = () => {
  return (
    <footer className="bg-background-dark text-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">S</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">SSourcing</span>
                <span className="text-xl font-light text-gray-400">China</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Your trusted China sourcing agent. We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate seamless shipping.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@ssourcingchina.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+86 571 1234 5678</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>Hangzhou, Zhejiang, China</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
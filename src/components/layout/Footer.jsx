import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Supplier Verification', href: '/services#supplier-verification' },
    { name: 'Quality Control', href: '/services#quality-control' },
    { name: 'Factory Audits', href: '/services#factory-audits' },
    { name: 'Production Follow-up', href: '/services#production-follow-up' },
    { name: 'Shipping Coordination', href: '/services#shipping-coordination' },
  ],
  company: [
    { name: 'About Us', href: '/#about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  products: [
    { name: 'Electronics', href: '/products#electronics' },
    { name: 'Home & Garden', href: '/products#home-garden' },
    { name: 'Apparel & Textiles', href: '/products#apparel' },
    { name: 'Machinery & Parts', href: '/products#machinery' },
    { name: 'Custom Products', href: '/products#custom' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">SSourcing</span>
                <span className="text-xs text-gray-400 -mt-1">China</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Your trusted China sourcing agent. We help global buyers find reliable suppliers, 
              verify factories, and coordinate shipping.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:+8612345678900" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span>+86 123 4567 8900</span>
              </a>
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@ssourcingchina.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>Shenzhen, Guangdong, China</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Products</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-500 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

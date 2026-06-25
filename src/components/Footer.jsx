import React from 'react'
import { Link } from 'react-router-dom'
import { Package, Mail, Phone, MapPin, Linkedin, Facebook, ArrowRight } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Supplier Verification', path: '/services#verification' },
    { label: 'Quality Inspection', path: '/services#inspection' },
    { label: 'Production Follow-up', path: '/services#production' },
    { label: 'Shipping Coordination', path: '/services#shipping' },
    { label: 'Factory Audits', path: '/services#audits' },
  ],
  Company: [
    { label: 'About Us', path: '/how-it-works' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact Us', path: '/contact' },
  ],
  Products: [
    { label: 'Electronics', path: '/products#electronics' },
    { label: 'Home & Garden', path: '/products#home-garden' },
    { label: 'Apparel & Textiles', path: '/products#apparel' },
    { label: 'Industrial Equipment', path: '/products#industrial' },
    { label: 'Consumer Goods', path: '/products#consumer' },
  ],
}

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-gray-300">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white">Get Sourcing Updates</h3>
              <p className="text-gray-400 mt-1">Industry insights, sourcing tips, and market updates delivered monthly.</p>
            </div>
            <form className="flex w-full md:w-auto gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent-400"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-navy-600 rounded-lg flex items-center justify-center">
                <Package className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">SSourcing China</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Professional sourcing agent based in China. We help global buyers find reliable suppliers, verify factories, and manage quality.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> info@ssourcingchina.com
              </a>
              <a href="tel:+8612345678900" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> +86 123 4567 8900
              </a>
              <span className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" /> Shenzhen, Guangdong, China
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

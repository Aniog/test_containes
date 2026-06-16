import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  products: [
    { name: 'Double Folding Machine', path: '/products' },
    { name: 'Sheet Metal Folder', path: '/products' },
    { name: 'Metal Folder Machine', path: '/products' },
    { name: 'Metal Folding Machine', path: '/products' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/about' },
    { name: 'Careers', path: '/contact' },
    { name: 'News', path: '/contact' },
  ],
  support: [
    { name: 'Contact Us', path: '/contact' },
    { name: 'Technical Support', path: '/contact' },
    { name: 'Spare Parts', path: '/contact' },
    { name: 'Service Plans', path: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-200">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center font-extrabold text-white text-sm tracking-wider">
                AM
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg tracking-wide leading-tight">
                  ARTITECT
                </span>
                <span className="text-brand-400 text-[10px] uppercase tracking-[0.25em] leading-tight">
                  Machinery
                </span>
              </div>
            </Link>
            <p className="text-brand-300 text-sm leading-relaxed max-w-sm mb-6">
              Leading manufacturer of precision sheet metal folding machines.
              Delivering industrial-grade solutions for metalworking professionals worldwide since 1998.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:+18005551234" className="flex items-center gap-2 text-brand-300 hover:text-accent-400 transition-colors">
                <Phone className="w-4 h-4" />
                +1 (800) 555-1234
              </a>
              <a href="mailto:info@artitectmachinery.com" className="flex items-center gap-2 text-brand-300 hover:text-accent-400 transition-colors">
                <Mail className="w-4 h-4" />
                info@artitectmachinery.com
              </a>
              <span className="flex items-center gap-2 text-brand-300">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                1200 Industrial Parkway, Cleveland, OH 44135
              </span>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Products</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-brand-300 hover:text-accent-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-brand-300 hover:text-accent-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Support</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-brand-300 hover:text-accent-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-400 text-xs">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-brand-400">
            <a href="#" className="hover:text-brand-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-200 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-200 transition-colors">Warranty</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

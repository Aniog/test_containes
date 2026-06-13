import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'

const productLinks = [
  'Double Folding Machine',
  'Double Folder',
  'Sheet Metal Folder',
  'Sheet Metal Folding Machine',
  'Metal Folder',
  'Metal Folder Machine',
  'Metal Folding Machine',
]

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-amber-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg font-[var(--font-display)]">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm tracking-wider uppercase">
                  ARTITECT
                </span>
                <span className="text-amber-500 text-[10px] tracking-widest uppercase -mt-0.5">
                  MACHINERY
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Engineering excellence in sheet metal fabrication. We deliver precision folding machinery built for industrial performance and reliability.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>+1 (555) 000-0000</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>info@artitectmachinery.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Industrial District, Manufacturing Zone</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-amber-500 text-sm transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((product) => (
                <li key={product}>
                  <Link
                    to="/products"
                    className="text-slate-400 hover:text-amber-500 text-sm transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Stay Updated
            </h4>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe for product updates and industry insights.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 text-sm placeholder:text-slate-500 focus:outline-none focus:border-amber-600 transition-colors"
              />
              <button className="px-4 py-2.5 bg-amber-600 text-white text-sm font-medium rounded-lg hover:bg-amber-500 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-slate-500 text-xs hover:text-slate-300 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-slate-500 text-xs hover:text-slate-300 cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

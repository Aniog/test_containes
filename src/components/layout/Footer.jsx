import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-4">
              <span className="text-2xl font-display font-bold tracking-tight text-white">
                ARTITECT
              </span>
              <span className="block text-[10px] tracking-[0.35em] uppercase text-gold-400 font-semibold">
                Machinery
              </span>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed">
              Leading manufacturer of precision sheet metal folding machines. Engineering excellence since 1998.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">
              Products
            </h4>
            <ul className="space-y-2.5">
              {['Double Folding Machines', 'Sheet Metal Folders', 'Metal Folding Machines', 'Custom Solutions'].map((item) => (
                <li key={item}>
                  <Link to="/products" className="text-navy-300 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'Products', to: '/products' },
                { label: 'Contact', to: '/contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-navy-300 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-navy-300 text-sm">
                  1200 Industrial Parkway<br />
                  Milwaukee, WI 53214
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span className="text-navy-300 text-sm">+1 (414) 555-0187</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span className="text-navy-300 text-sm">info@artitectmachinery.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-navy-400 text-sm">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-navy-400 text-sm hover:text-navy-200 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-navy-400 text-sm hover:text-navy-200 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

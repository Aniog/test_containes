import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-stone-50 flex items-center justify-center text-stone-50 font-serif text-base">
                A
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-lg text-stone-50 tracking-tight">
                  ARTITECT
                </span>
                <span className="text-[10px] uppercase tracking-[0.32em] text-stone-400 mt-1">
                  Machinery
                </span>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-stone-400 max-w-sm">
              Precision sheet metal folding machines engineered for fabricators who
              value reliability, finish quality, and operator-friendly control.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.22em] text-amber-500 font-medium">
              Explore
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/" className="text-stone-300 hover:text-stone-50 transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-stone-300 hover:text-stone-50 transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-stone-300 hover:text-stone-50 transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-stone-300 hover:text-stone-50 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.22em] text-amber-500 font-medium">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-stone-500 flex-shrink-0" />
                <span className="text-stone-300">
                  Industrial Park 14, Block C<br />
                  Fabrication District, 38100
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-stone-500 flex-shrink-0" />
                <a href="tel:+18005550140" className="text-stone-300 hover:text-stone-50 transition-colors">
                  +1 (800) 555-0140
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-stone-500 flex-shrink-0" />
                <a href="mailto:sales@artitect.co" className="text-stone-300 hover:text-stone-50 transition-colors">
                  sales@artitect.co
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-stone-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs tracking-wide text-stone-500">
            © {new Date().getFullYear()} ARTITECT Machinery. All rights reserved.
          </p>
          <p className="text-xs tracking-[0.22em] uppercase text-stone-500">
            Engineered with precision
          </p>
        </div>
      </div>
    </footer>
  )
}

import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import BrandMark from './BrandMark'

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <BrandMark variant="light" />
          <p className="mt-6 text-silver max-w-md leading-relaxed">
            Precision-engineered sheet metal folding machines for fabricators
            who demand accuracy, repeatability, and elegant operation.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-ember mb-5">
            Explore
          </h4>
          <ul className="space-y-3 text-silver">
            <li><Link to="/products" className="hover:text-paper transition-colors">Products</Link></li>
            <li><Link to="/about" className="hover:text-paper transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-paper transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-ember mb-5">
            Contact
          </h4>
          <ul className="space-y-4 text-silver">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-1 text-silver shrink-0" />
              <span>Industrial Park 14<br />Dortmund, Germany</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-silver shrink-0" />
              <a href="tel:+49000000000" className="hover:text-paper transition-colors">+49 (0) 231 00 00 00</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-silver shrink-0" />
              <a href="mailto:hello@artitect.com" className="hover:text-paper transition-colors">hello@artitect.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-graphite">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-silver tracking-wide">
            © {new Date().getFullYear()} Artitect Machinery. All rights reserved.
          </p>
          <p className="text-xs text-silver tracking-[0.2em] uppercase">
            Engineered in Europe · Trusted Worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}

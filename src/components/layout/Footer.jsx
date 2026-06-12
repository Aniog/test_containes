import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="inline-block w-8 h-8 border border-bone relative">
              <span className="absolute inset-1 border border-bone"></span>
            </span>
            <span className="font-serif text-xl tracking-wide">
              ARTITECT <span className="text-accent">MACHINERY</span>
            </span>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-mist">
            Precision sheet metal folding machines for fabricators who treat
            tolerance and finish as a craft. Engineered, assembled and
            calibrated under one roof.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-mist mb-4">
            Navigate
          </p>
          <ul className="space-y-3 text-sm text-bone">
            <li><Link to="/" className="hover:text-accent transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-accent transition">Products</Link></li>
            <li><Link to="/about" className="hover:text-accent transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-mist mb-4">
            Contact
          </p>
          <ul className="space-y-3 text-sm text-bone">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <span>Hall 4, Industrial Park East, Brescia, Italy</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <span>+39 030 555 0148</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <span>sales@artitect.machinery</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-graphite">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-mist">
          <p>© {new Date().getFullYear()} Artitect Machinery S.r.l. — All rights reserved.</p>
          <p>Designed for fabricators. Built in Europe.</p>
        </div>
      </div>
    </footer>
  )
}

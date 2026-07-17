import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import Logo from './Logo'
import { PRODUCTS } from '@/data/products'

export default function Footer() {
  return (
    <footer className="bg-ink text-mist">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Precision double folding machines and metal folders, engineered for
              fabricators who measure success in tenths of a millimeter.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">Machines</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {PRODUCTS.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <Link to={`/products#${p.id}`} className="transition-colors hover:text-amber">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">Company</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/about" className="transition-colors hover:text-amber">About ARTITECT</Link></li>
              <li><Link to="/products" className="transition-colors hover:text-amber">All Machines</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-amber">Request a Quote</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-amber">Service & Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                <span>128 Industrial Park Avenue<br />Sheet Metal District, 40210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-amber" />
                <a href="tel:+15550142080" className="transition-colors hover:text-amber">+1 (555) 014-2080</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-amber" />
                <a href="mailto:sales@artitect-machinery.com" className="transition-colors hover:text-amber">
                  sales@artitect-machinery.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs md:flex-row">
          <p>© {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
          <p className="tracking-wide">Engineered to fold. Built to last.</p>
        </div>
      </div>
    </footer>
  )
}

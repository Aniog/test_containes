import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-graphite text-paper">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 border border-paper flex items-center justify-center">
              <span className="font-display text-paper text-xl leading-none">A</span>
            </div>
            <div className="leading-tight">
              <div className="font-display text-paper text-lg tracking-wide">ARTITECT</div>
              <div className="text-[10px] tracking-[0.3em] text-paper/60 uppercase">Machinery</div>
            </div>
          </div>
          <p className="text-paper/70 leading-relaxed max-w-md">
            Precision-engineered double folding machines and sheet metal folders,
            designed for craftsmen who demand exact bends and a refined finish on every panel.
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-widest uppercase text-ember-soft mb-5">Explore</h4>
          <ul className="space-y-3 text-paper/80">
            <li><Link to="/" className="hover:text-ember transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-ember transition-colors">Products</Link></li>
            <li><Link to="/about" className="hover:text-ember transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-ember transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-widest uppercase text-ember-soft mb-5">Contact</h4>
          <ul className="space-y-3 text-paper/80 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-1 text-ember-soft flex-shrink-0" />
              <span>14 Foundry Lane, Industrial Quarter, Manchester</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-ember-soft flex-shrink-0" />
              <span>+44 (0) 161 555 0118</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-ember-soft flex-shrink-0" />
              <span>hello@artitect-machinery.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-paper/50">
          <p>© {new Date().getFullYear()} Artitect Machinery. All rights reserved.</p>
          <p className="tracking-widest uppercase">Engineered in the United Kingdom</p>
        </div>
      </div>
    </footer>
  )
}

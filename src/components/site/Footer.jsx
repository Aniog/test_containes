import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-ink text-canvas">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 border border-canvas flex items-center justify-center">
              <span className="font-serif text-lg">A</span>
            </div>
            <div className="leading-tight">
              <div className="font-serif text-lg tracking-wide">ARTITECT</div>
              <div className="text-[10px] uppercase tracking-widest2 text-steel">Machinery</div>
            </div>
          </div>
          <p className="text-steel text-sm leading-relaxed max-w-md">
            Precision sheet metal folding machines engineered for fabricators
            who demand consistency, longevity, and refined craftsmanship.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest2 text-steel mb-5">Explore</div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-amber-brand transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-amber-brand transition-colors">Products</Link></li>
            <li><Link to="/about" className="hover:text-amber-brand transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-amber-brand transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest2 text-steel mb-5">Contact</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-amber-brand" strokeWidth={1.5} />
              <span>14 Foundry Lane, Industrial District</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-amber-brand" strokeWidth={1.5} />
              <span>+1 (415) 555 0142</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-0.5 text-amber-brand" strokeWidth={1.5} />
              <span>sales@artitect.co</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-graphite">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-steel">
          <div>© {new Date().getFullYear()} Artitect Machinery. All rights reserved.</div>
          <div className="uppercase tracking-widest2">Engineered for fabrication</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

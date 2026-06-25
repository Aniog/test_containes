import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl tracking-tight">ARTITECT</span>
              <span className="text-xs uppercase tracking-[0.25em] text-bronze">
                Machinery
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/70 max-w-md">
              Engineered in the spirit of architecture. Precision sheet metal
              folding machinery built for fabricators who value accuracy,
              repeatability, and quiet, dependable performance.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-bronze">
              Explore
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-white/80 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-bronze">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-bronze shrink-0" />
                <span>sales@artitect-machinery.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-bronze shrink-0" />
                <span>+1 (415) 555-0142</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-bronze shrink-0" />
                <span>Industrial Quarter, Building 12<br />Modena, Italy</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-paper/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Precision · Engineered · Crafted
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

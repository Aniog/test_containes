import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-ink text-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 border border-bone flex items-center justify-center font-serif text-xl">
              A
            </span>
            <div className="leading-tight">
              <div className="font-serif text-xl tracking-wide">ARTITECT</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-bone/60">
                Machinery
              </div>
            </div>
          </div>
          <p className="text-bone/70 max-w-md leading-relaxed text-sm">
            Precision-engineered double folding machines and sheet metal folders for
            architects of metalwork. Built for accuracy, longevity, and the craftsmen
            who demand both.
          </p>
        </div>

        <div>
          <div className="text-xs tracking-[0.25em] uppercase text-brass mb-5">
            Explore
          </div>
          <ul className="space-y-3 text-sm text-bone/80">
            <li><Link to="/" className="hover:text-brass transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-brass transition-colors">Products</Link></li>
            <li><Link to="/about" className="hover:text-brass transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-brass transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs tracking-[0.25em] uppercase text-brass mb-5">
            Contact
          </div>
          <ul className="space-y-4 text-sm text-bone/80">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 text-brass shrink-0" />
              <span>Industrial Park 14<br />Stuttgart, Germany</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-brass shrink-0" />
              <a href="mailto:sales@artitect.com" className="hover:text-brass transition-colors">
                sales@artitect.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-brass shrink-0" />
              <a href="tel:+49711000000" className="hover:text-brass transition-colors">
                +49 711 000 000
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs tracking-wide text-bone/50">
          <span>© {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</span>
          <span className="tracking-[0.25em] uppercase">Engineered in Germany</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

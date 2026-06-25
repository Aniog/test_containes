import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <svg viewBox="0 0 32 32" className="w-8 h-8">
              <path d="M4 24 L16 6 L28 24" stroke="#FAFAF7" strokeWidth="1.5" fill="none" />
              <path d="M4 24 L28 24" stroke="#B68A35" strokeWidth="1.5" />
            </svg>
            <span className="font-serif text-xl tracking-[0.18em]">
              ARTITECT<span className="text-accent"> · </span>MACHINERY
            </span>
          </div>
          <p className="text-ash leading-relaxed max-w-md">
            Precision-engineered double folding machines and sheet metal folders
            for fabricators who refuse to compromise.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-[0.25em] text-accent mb-5">Navigate</h4>
          <ul className="space-y-3 text-sm text-mist">
            <li><Link to="/" className="hover:text-paper transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-paper transition-colors">Products</Link></li>
            <li><Link to="/about" className="hover:text-paper transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-paper transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-xs uppercase tracking-[0.25em] text-accent mb-5">Contact</h4>
          <ul className="space-y-4 text-sm text-mist">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <span>Building 7, Hangu Industrial District, Tianjin, China</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <span>+86 22 5800 1188</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <span>sales@artitect-machinery.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-steel">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ash">
          <p>© {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Engineered in Precision · Built to Last</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

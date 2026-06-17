import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-mist">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-3xl text-white">ARTITECT</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-brass">
              Machinery
            </span>
          </div>
          <p className="mt-6 text-mist/70 max-w-md leading-relaxed">
            Precision sheet metal folding machines engineered for fabricators
            who refuse to compromise on accuracy, durability, or finish.
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-brass mb-5">
            Navigate
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-white transition">Products</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-brass mb-5">
            Get in Touch
          </h4>
          <ul className="space-y-4 text-sm text-mist/80">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-1 text-brass flex-shrink-0" />
              <span>124 Foundry Lane,<br />Industrial District</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brass flex-shrink-0" />
              <span>+1 (415) 555-0188</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brass flex-shrink-0" />
              <span>hello@artitect.co</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-mist/60">
            © {year} Artitect Machinery. All rights reserved.
          </p>
          <p className="text-xs text-mist/60 tracking-wide">
            Engineered with precision · Built to last
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-graphite-950 text-bone-50 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid gap-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex flex-col leading-none">
            <span className="font-serif text-3xl tracking-wide text-bone-50">
              ARTITECT
            </span>
            <span className="text-[10px] tracking-[0.35em] uppercase text-brass-300 mt-1">
              Machinery
            </span>
          </div>
          <p className="mt-6 max-w-md text-steel-300 leading-relaxed">
            Precision double folding machines and sheet metal folders, engineered
            for fabricators who refuse to compromise on quality, repeatability,
            or shop-floor calm.
          </p>
          <div className="mt-8 h-px w-12 bg-brass-500" />
        </div>

        <div>
          <p className="eyebrow eyebrow-light mb-5">Explore</p>
          <ul className="space-y-3 text-sm text-bone-50">
            <li><Link to="/" className="hover:text-brass-300 transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-brass-300 transition-colors">Products</Link></li>
            <li><Link to="/about" className="hover:text-brass-300 transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-brass-300 transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow eyebrow-light mb-5">Contact</p>
          <ul className="space-y-4 text-sm text-bone-50">
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-1 text-brass-300" strokeWidth={1.5} />
              <span>hello@artitect-machinery.com</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-1 text-brass-300" strokeWidth={1.5} />
              <span>+1 (415) 555-0142</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-1 text-brass-300" strokeWidth={1.5} />
              <span>Pier 27, Industrial District<br/>San Francisco, CA</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-graphite-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs tracking-[0.18em] uppercase text-steel-300">
          <p>© {new Date().getFullYear()} ARTITECT Machinery. All rights reserved.</p>
          <p>Engineered in Europe · Built for the world</p>
        </div>
      </div>
    </footer>
  )
}

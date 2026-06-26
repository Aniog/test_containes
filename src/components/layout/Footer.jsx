import { Link } from "react-router-dom"
import { Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-graphite text-bone mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-3xl tracking-tight">ARTITECT</span>
            <span className="text-[10px] tracking-[0.35em] uppercase text-accent">Machinery</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-bone/70 max-w-md">
            Precision-engineered sheet metal folding machines for architectural
            façades, premium fabricators, and industrial workshops. Built to fold
            flawlessly, every cycle.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Explore</p>
          <ul className="space-y-3 text-sm text-bone/80">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-accent transition-colors">Machines</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Contact</p>
          <ul className="space-y-3 text-sm text-bone/80">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
              <span>Industriestrasse 14, 8854 Galgenen, Switzerland</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-accent flex-shrink-0" />
              <a href="tel:+41552501800" className="hover:text-accent transition-colors">+41 55 250 18 00</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-accent flex-shrink-0" />
              <a href="mailto:hello@artitect.com" className="hover:text-accent transition-colors">hello@artitect.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-bone/50">
          <p>© {new Date().getFullYear()} Artitect Machinery. All rights reserved.</p>
          <p className="tracking-widest uppercase">Engineered in Switzerland · Folded in your workshop</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

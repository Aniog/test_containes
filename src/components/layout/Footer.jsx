import { Link } from "react-router-dom"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-page py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-3xl font-semibold tracking-wide text-cream">
                ARTITECT
              </span>
              <span className="text-[0.72rem] font-semibold uppercase tracking-eyebrow text-gold">
                Machinery
              </span>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/70">
              Precision sheet metal folding machines, engineered for fabricators
              who refuse to compromise on accuracy, durability, or finish.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[0.72rem] font-semibold uppercase tracking-eyebrow text-gold">
              Explore
            </h4>
            <ul className="mt-6 space-y-3 text-sm">
              <li><Link to="/" className="text-cream/80 hover:text-cream">Home</Link></li>
              <li><Link to="/products" className="text-cream/80 hover:text-cream">Products</Link></li>
              <li><Link to="/about" className="text-cream/80 hover:text-cream">About</Link></li>
              <li><Link to="/contact" className="text-cream/80 hover:text-cream">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[0.72rem] font-semibold uppercase tracking-eyebrow text-gold">
              Contact
            </h4>
            <ul className="mt-6 space-y-4 text-sm text-cream/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <span>Industrial Park, Building 14<br/>Shanghai, China</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+862168880000" className="hover:text-cream">+86 21 6888 0000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:sales@artitect-machinery.com" className="hover:text-cream">
                  sales@artitect-machinery.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <p className="text-xs text-cream/50">
            Engineered with precision. Built to last.
          </p>
        </div>
      </div>
    </footer>
  )
}

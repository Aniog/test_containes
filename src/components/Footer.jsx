import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-foreground-inverse">
      <div className="container-main py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-white font-extrabold text-sm">AM</span>
              </div>
              <span className="font-bold text-lg tracking-tight text-foreground-inverse">
                ARTITECT <span className="font-normal text-white/70">MACHINERY</span>
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Engineering excellence in sheet metal folding machinery. Precision, durability,
              and performance for modern manufacturing.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'Products', to: '/products' },
                { label: 'About Us', to: '/about' },
                { label: 'Contact', to: '/contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/70 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">
                  123 Industrial Parkway, Suite 400<br />
                  Manufacturing District, CA 90210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span className="text-white/70 text-sm">+1 (800) 555-0199</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span className="text-white/70 text-sm">sales@artitectmachinery.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-white/50 text-xs hover:text-white/70 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-white/50 text-xs hover:text-white/70 cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

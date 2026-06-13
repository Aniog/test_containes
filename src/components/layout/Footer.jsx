import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'

const productLinks = [
  { label: 'Double Folding Machines', path: '/products' },
  { label: 'Sheet Metal Folders', path: '/products' },
  { label: 'Metal Folder Machines', path: '/products' },
  { label: 'Metal Folding Machines', path: '/products' },
]

const companyLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Products', path: '/products' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-extrabold text-sm tracking-tight">AM</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm tracking-widest uppercase leading-tight">ARTITECT</span>
                <span className="text-brand-400 text-[10px] tracking-[0.2em] uppercase leading-tight">Machinery</span>
              </div>
            </Link>
            <p className="text-brand-400 text-sm leading-relaxed">
              Engineering precision sheet metal folding machines for industry leaders worldwide since 1987.
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-brand-400 hover:text-accent transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-brand-400 hover:text-accent transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-brand-400">
                  1200 Industrial Parkway<br />
                  Stuttgart, Germany 70173
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-brand-400">+49 711 555 0100</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-brand-400">info@artitect-machinery.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-brand-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-500 text-xs">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-brand-500 text-xs hover:text-brand-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-brand-500 text-xs hover:text-brand-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

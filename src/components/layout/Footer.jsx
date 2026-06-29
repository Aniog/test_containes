import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-primary font-bold text-sm">AM</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold tracking-tight text-white">
                  ARTITECT
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-gray-400">
                  Machinery
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Precision-engineered sheet metal folding machines for industrial excellence. Built for durability, designed for productivity.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/products', label: 'Products' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-400 hover:text-accent transition-colors duration-200 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Contact
            </h3>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>123 Industrial Parkway, Suite 400<br />Manufacturing District, NY 10001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+1 (555) 234-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>info@artitectmachinery.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <span className="hover:text-accent cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-accent cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
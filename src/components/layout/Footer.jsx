import { Link } from 'react-router-dom'
import { Icons, navLinks } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="font-bold text-lg text-white">
                SSourcing<span className="text-accent-light">China</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Professional China sourcing agent helping overseas buyers find reliable suppliers, 
              verify factories, inspect quality, and coordinate shipping since 2010.
            </p>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 text-white/50 text-xs">
                <Icons.Mail className="w-4 h-4" />
                info@ssourcingchina.com
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-accent-light text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/services" className="text-white/60 hover:text-accent-light text-sm transition-colors">
                  Supplier Sourcing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-accent-light text-sm transition-colors">
                  Factory Audit & Verification
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-accent-light text-sm transition-colors">
                  Quality Control & Inspection
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-accent-light text-sm transition-colors">
                  Production Monitoring
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-accent-light text-sm transition-colors">
                  Shipping & Logistics
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-accent-light text-sm transition-colors">
                  Product Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="flex items-start gap-2">
                <Icons.MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent-light" />
                <span>Guangzhou, Guangdong, China</span>
              </li>
              <li className="flex items-start gap-2">
                <Icons.Phone className="w-4 h-4 mt-0.5 shrink-0 text-accent-light" />
                <span>+86 20 8888 6666</span>
              </li>
              <li className="flex items-start gap-2">
                <Icons.Clock className="w-4 h-4 mt-0.5 shrink-0 text-accent-light" />
                <span>Mon-Fri: 9:00 AM - 6:00 PM (CST)</span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 text-accent-light hover:text-accent text-sm font-medium transition-colors"
            >
              Get in touch
              <Icons.ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
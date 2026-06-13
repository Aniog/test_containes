import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  products: [
    { label: 'Double Folding Machine', path: '/products' },
    { label: 'Double Folder', path: '/products' },
    { label: 'Sheet Metal Folder', path: '/products' },
    { label: 'Sheet Metal Folding Machine', path: '/products' },
    { label: 'Metal Folder Machine', path: '/products' },
    { label: 'Metal Folding Machine', path: '/products' },
  ],
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Our Technology', path: '/about' },
    { label: 'Certifications', path: '/about' },
    { label: 'Careers', path: '/about' },
  ],
  support: [
    { label: 'Contact Us', path: '/contact' },
    { label: 'Technical Support', path: '/contact' },
    { label: 'Spare Parts', path: '/contact' },
    { label: 'Training', path: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center">
                <span className="text-brand-dark font-display font-bold text-lg">A</span>
              </div>
              <div>
                <span className="font-display text-xl font-bold text-white tracking-wide">
                  ARTITECT
                </span>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-brand-gold font-body">
                  Machinery
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed font-body mb-6">
              Precision-engineered sheet metal folding machines built for performance, 
              reliability, and the demands of modern manufacturing.
            </p>
            <div className="space-y-3">
              <a href="tel:+18005551234" className="flex items-center gap-2 text-sm text-white/70 hover:text-brand-gold transition-colors font-body">
                <Phone className="w-4 h-4" />
                +1 (800) 555-1234
              </a>
              <a href="mailto:info@artitectmachinery.com" className="flex items-center gap-2 text-sm text-white/70 hover:text-brand-gold transition-colors font-body">
                <Mail className="w-4 h-4" />
                info@artitectmachinery.com
              </a>
              <div className="flex items-start gap-2 text-sm text-white/70 font-body">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                1250 Industrial Parkway, Suite 200<br />
                Houston, TX 77015
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-brand-gold mb-6">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="group flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors font-body">
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-brand-gold mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="group flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors font-body">
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-brand-gold mb-6">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="group flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors font-body">
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-body">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-white/40 text-xs font-body">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/70 transition-colors">Warranty</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

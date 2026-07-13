import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg leading-tight">SSourcing</span>
                <span className="text-xs text-blue-200 -mt-1">China</span>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Your trusted China-based sourcing agent. We help global buyers find reliable suppliers, 
              verify factories, inspect quality, and coordinate shipping.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: '/services', label: 'Our Services' },
                { to: '/how-it-works', label: 'How It Works' },
                { to: '/products-we-source', label: 'Products We Source' },
                { to: '/case-studies', label: 'Case Studies' },
                { to: '/blog', label: 'Blog' },
                { to: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-blue-200 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Supplier Sourcing & Verification',
                'Factory Audits',
                'Quality Inspection',
                'Production Monitoring',
                'Shipping & Logistics',
                'Customs Documentation',
              ].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-blue-200 text-sm hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <span className="text-blue-200 text-sm">Guangzhou, Guangdong Province, China</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-blue-200 text-sm hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <a href="tel:+862012345678" className="text-blue-200 text-sm hover:text-white transition-colors">
                  +86 20 1234 5678
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link to="/contact" className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg font-semibold text-sm bg-white text-primary hover:bg-blue-50 transition-colors">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-main py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-300 text-xs">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-blue-300 text-xs hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-blue-300 text-xs hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
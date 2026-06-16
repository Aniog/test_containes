import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent text-primary flex items-center justify-center font-bold text-lg">
                A
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight">ARTITECT</span>
                <span className="block text-xs font-medium tracking-widest uppercase text-white/70">
                  MACHINERY
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Precision engineering solutions for sheet metal fabrication. 
              Trusted by industry leaders worldwide for quality and reliability.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-accent">
              Products
            </h4>
            <ul className="space-y-3">
              {[
                'Double Folding Machine',
                'Sheet Metal Folder',
                'Metal Folding Machine',
                'Double Folder',
                'Metal Folder Machine',
              ].map((product) => (
                <li key={product}>
                  <Link
                    to="/products"
                    className="text-white/70 text-sm hover:text-accent transition-colors"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-accent">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/products', label: 'Products' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/70 text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-accent">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  1234 Industrial Blvd<br />
                  Manufacturing City, MC 56789
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+1234567890" className="text-white/70 text-sm hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:info@artitect.com" className="text-white/70 text-sm hover:text-accent transition-colors">
                  info@artitect.com
                </a>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/70 hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Artitect Machinery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

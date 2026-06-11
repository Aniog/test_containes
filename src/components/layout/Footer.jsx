import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-bold text-2xl uppercase tracking-wider mb-2">
              ARTITECT
            </div>
            <div className="text-xs uppercase tracking-widest text-slate-400 mb-4">
              Machinery
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Precision engineering for metal folding solutions. 
              Delivering quality machinery since 1995.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm uppercase tracking-wider font-semibold mb-4 text-amber-500">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm uppercase tracking-wider font-semibold mb-4 text-amber-500">
              Products
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Double Folding Machine
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Sheet Metal Folder
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Metal Folding Machine
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm uppercase tracking-wider font-semibold mb-4 text-amber-500">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">
                  123 Industrial Ave<br />
                  Manufacturing District<br />
                  City, State 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-slate-400 hover:text-white text-sm transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-500 flex-shrink-0" />
                <a href="mailto:info@artitect.com" className="text-slate-400 hover:text-white text-sm transition-colors">
                  info@artitect.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} ARTITECT Machinery. All rights reserved.
          </p>
          <Link to="/contact" className="btn-primary text-xs">
            Request a Quote <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <span className="text-gold font-extrabold">S</span>Sourcing China
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <MapPin className="w-4 h-4" />
              Guangzhou, China
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/services" className="hover:text-gold transition-colors">Supplier Search</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Factory Verification</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Quality Inspection</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Production Follow-Up</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/how-it-works" className="hover:text-gold transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-gold transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-gold transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold" />
                info@ssourcingchina.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" />
                +86 138 0000 0000
              </li>
            </ul>
            <Link
              to="/contact"
              className="inline-block mt-4 bg-gold text-navy px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-gold-light transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-400 text-sm">
            <Link to="/contact" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

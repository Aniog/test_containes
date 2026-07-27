import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">
              <span className="text-accent font-extrabold">S</span>Sourcing China
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              China-based sourcing agent helping overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/services" className="no-underline text-white/80 hover:text-accent">Supplier Search</Link></li>
              <li><Link to="/services" className="no-underline text-white/80 hover:text-accent">Factory Verification</Link></li>
              <li><Link to="/services" className="no-underline text-white/80 hover:text-accent">Quality Inspection</Link></li>
              <li><Link to="/services" className="no-underline text-white/80 hover:text-accent">Production Follow-up</Link></li>
              <li><Link to="/services" className="no-underline text-white/80 hover:text-accent">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/how-it-works" className="no-underline text-white/80 hover:text-accent">How It Works</Link></li>
              <li><Link to="/products" className="no-underline text-white/80 hover:text-accent">Products We Source</Link></li>
              <li><Link to="/case-studies" className="no-underline text-white/80 hover:text-accent">Case Studies</Link></li>
              <li><Link to="/blog" className="no-underline text-white/80 hover:text-accent">Blog</Link></li>
              <li><Link to="/contact" className="no-underline text-white/80 hover:text-accent">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                info@ssourcingchina.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                +86 755 8888 0000
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                Shenzhen, Guangdong, China
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-white/60">
          &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

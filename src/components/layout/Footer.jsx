import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Youtube, ChevronRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SS</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">SSourcing</span>
                <span className="text-xl font-bold text-brand-400"> China</span>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Your trusted China-based sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality control from factory to shipment.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-brand-600 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 text-neutral-400" />
              </a>
              <a href="#" className="w-9 h-9 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-brand-600 transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4 text-neutral-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'How It Works', path: '/how-it-works' },
                { label: 'Products We Source', path: '/products' },
                { label: 'Case Studies', path: '/case-studies' },
                { label: 'Blog', path: '/blog' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              {[
                'Supplier Sourcing & Verification',
                'Factory Audits',
                'Quality Control & Inspection',
                'Production Follow-Up',
                'Shipping & Logistics',
                'Sample Management',
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-neutral-400">Guangzhou, Guangdong, China</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <a href="tel:+862012345678" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  +86 20 1234 5678
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
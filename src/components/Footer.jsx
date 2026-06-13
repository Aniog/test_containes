import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-brand-blue rounded flex items-center justify-center text-white font-bold text-lg">S</div>
              <div className="leading-tight">
                <div className="font-bold text-white text-lg">SSourcing</div>
                <div className="text-brand-blue text-xs font-medium -mt-0.5">CHINA</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, inspect quality, and manage logistics.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-navy-light flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-blue transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-navy-light flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-blue transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-navy-light flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-blue transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { to: '/services', label: 'Our Services' },
                { to: '/how-it-works', label: 'How It Works' },
                { to: '/products', label: 'Products We Source' },
                { to: '/case-studies', label: 'Case Studies' },
                { to: '/blog', label: 'Blog' },
                { to: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {[
                'Supplier Sourcing',
                'Factory Verification',
                'Quality Inspection',
                'Production Monitoring',
                'Shipping & Logistics',
                'Product Development',
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-gray-400 text-sm hover:text-white transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">
                  Room 1208, Building A, No. 168 Guangzhou Avenue, Guangzhou, China
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                <a href="tel:+8613812345678" className="text-gray-400 text-sm hover:text-white transition-colors">
                  +86 138 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-gray-400 text-sm hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-light">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
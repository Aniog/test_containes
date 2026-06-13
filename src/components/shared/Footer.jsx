import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-white">SSourcing</span>
              <span className="text-xl font-bold text-gold">China</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your reliable China sourcing partner. We help global buyers find suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/services" className="text-gray-300 hover:text-gold no-underline transition-colors">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-gold no-underline transition-colors">Factory Verification</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-gold no-underline transition-colors">Quality Inspection</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-gold no-underline transition-colors">Production Follow-up</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-gold no-underline transition-colors">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-gold no-underline transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-gold no-underline transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-gold no-underline transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-gold no-underline transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gold no-underline transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <span>info@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <span>+86 755 8888 8888</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <span>Shenzhen, Guangdong, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-light mt-12 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

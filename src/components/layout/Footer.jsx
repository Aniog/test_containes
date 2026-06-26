import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';
import { siteConfig } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-ss-text text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-ss-blue font-bold text-sm">S</span>
              </div>
              <span className="text-lg font-bold tracking-tight">
                SSourcing <span className="text-blue-300">China</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted China-based sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality control.
            </p>
            <div className="flex space-x-3">
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
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/how-it-works" className="text-gray-400 text-sm hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="text-gray-400 text-sm hover:text-white transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 text-sm hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-gray-400 text-sm hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2.5">
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-white transition-colors">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-white transition-colors">Factory Verification</Link></li>
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-white transition-colors">Quality Inspection</Link></li>
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-white transition-colors">Production Follow-Up</Link></li>
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-white transition-colors">Shipping & Logistics</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">{siteConfig.email}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">{siteConfig.phone}</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">{siteConfig.address}</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center px-4 py-2.5 bg-ss-orange text-white text-sm font-medium rounded-lg hover:bg-ss-orange-light transition-colors"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
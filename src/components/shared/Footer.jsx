import React from 'react';
import { Link } from 'react-router-dom';
import { Ship, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-white">
              <Ship className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold tracking-tight">SSourcing China</span>
            </Link>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed">
              Your reliable B2B sourcing partner in China. We help global buyers find verified suppliers, manage quality control, and ensure smooth shipping.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/process" className="text-sm hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="text-sm hover:text-white transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="text-sm hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Core Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Supplier Verification</li>
              <li>Product Sourcing</li>
              <li>Sample Consolidation</li>
              <li>Quality Control (QC)</li>
              <li>Production Follow-up</li>
              <li>Shipping & Logistics</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Futian District, Shenzhen,<br/>Guangdong, China 518000</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+8612345678900" className="hover:text-white transition-colors">+86 123 4567 8900</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">info@ssourcingchina.com</a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex h-9 items-center justify-center rounded-md border border-slate-700 bg-transparent px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-800 hover:text-white"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-slate-500">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

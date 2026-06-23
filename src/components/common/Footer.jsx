import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-white">
              <Globe className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold tracking-tight">SSourcing <span className="text-primary">China</span></span>
            </Link>
            <p className="text-sm text-slate-400">
              Professional China sourcing agent helping global businesses find reliable suppliers, ensure quality, and streamline logistics.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></Link>
              <Link to="#" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></Link>
              <Link to="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Sourcing Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Core Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-primary transition-colors">Supplier Verification</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Quality Inspection</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Factory Audit</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Production Follow-up</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Shipping Coordination</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="flex items-start space-x-3 text-sm">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <span>Room 502, Building A, Hi-Tech Park, Nanshan, Shenzhen, China</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <span>+86 755 8888 8888</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <span>contact@ssourcing-china.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {currentYear} SSourcing China Co., Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

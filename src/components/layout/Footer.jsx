import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl font-bold text-white tracking-tight">SSourcing</span>
            <span className="text-2xl font-light text-blue-500">China</span>
          </div>
          <p className="text-sm text-slate-400 mb-6">
            Your single point of contact for sourcing, manufacturing, and shipping from China to the world.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-slate-400 hover:text-white transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-white transition">Supplier Sourcing</Link></li>
            <li><Link to="/services" className="hover:text-white transition">Factory Audits</Link></li>
            <li><Link to="/services" className="hover:text-white transition">Quality Inspection</Link></li>
            <li><Link to="/services" className="hover:text-white transition">Shipping & Logistics</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/how-it-works" className="hover:text-white transition">How It Works</Link></li>
            <li><Link to="/case-studies" className="hover:text-white transition">Case Studies</Link></li>
            <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
              <span>Shenzhen, Guangdong Province, China</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-blue-500 shrink-0" />
              <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition">info@ssourcingchina.com</a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-blue-500 shrink-0" />
              <span>+86 138 0000 0000</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
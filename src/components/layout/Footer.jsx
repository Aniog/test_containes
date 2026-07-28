import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded bg-blue-600 text-white">
                <ShieldCheck size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                SSourcing<span className="text-blue-500">China</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Your trusted partner in China. We help global buyers find reliable suppliers, ensure quality, and manage seamless shipping.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/how-it-works" className="text-sm hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="text-sm hover:text-white transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="text-sm hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-white transition-colors">Blog & News</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Core Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services#supplier-verification" className="text-sm hover:text-white transition-colors">Supplier Verification</Link></li>
              <li><Link to="/services#product-sourcing" className="text-sm hover:text-white transition-colors">Product Sourcing</Link></li>
              <li><Link to="/services#quality-control" className="text-sm hover:text-white transition-colors">Quality Control (QC)</Link></li>
              <li><Link to="/services#production-follow-up" className="text-sm hover:text-white transition-colors">Production Tracking</Link></li>
              <li><Link to="/services#shipping" className="text-sm hover:text-white transition-colors">Shipping & Logistics</Link></li>
              <li><Link to="/services#customs" className="text-sm hover:text-white transition-colors">Customs Clearance</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  123 Business Center, Tianhe District<br />
                  Guangzhou, Guangdong, China 510000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="tel:+8612345678900" className="text-sm hover:text-white transition-colors">+86 123 4567 8900</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-sm hover:text-white transition-colors">info@ssourcingchina.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

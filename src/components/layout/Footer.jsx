import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Shield, Award, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight tracking-tight">SSourcing</span>
                <span className="text-navy-300 text-xs font-medium leading-tight -mt-0.5">China</span>
              </div>
            </div>
            <p className="text-navy-200 text-sm leading-relaxed mb-4">
              Your trusted China-based sourcing agent. We help global buyers find reliable suppliers, verify factories, and manage quality control.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              <li><Link to="/services" className="text-navy-200 hover:text-white text-sm transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="text-navy-200 hover:text-white text-sm transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="text-navy-200 hover:text-white text-sm transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="text-navy-200 hover:text-white text-sm transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-navy-200 hover:text-white text-sm transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-navy-200 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2.5">
              <li><span className="text-navy-200 text-sm">Supplier Sourcing</span></li>
              <li><span className="text-navy-200 text-sm">Factory Verification</span></li>
              <li><span className="text-navy-200 text-sm">Quality Inspection</span></li>
              <li><span className="text-navy-200 text-sm">Production Monitoring</span></li>
              <li><span className="text-navy-200 text-sm">Logistics & Shipping</span></li>
              <li><span className="text-navy-200 text-sm">Customs Clearance</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-navy-300 mt-0.5 shrink-0" />
                <span className="text-navy-200 text-sm">Guangzhou, Guangdong, China</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-navy-300 shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-navy-200 hover:text-white text-sm transition-colors">info@ssourcingchina.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-navy-300 shrink-0" />
                <span className="text-navy-200 text-sm">+86 20 1234 5678</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-navy-300" />
                <span className="text-navy-100 text-sm font-medium">Business Hours</span>
              </div>
              <p className="text-navy-200 text-xs">Mon - Fri: 9:00 AM - 6:00 PM (CST)</p>
              <p className="text-navy-200 text-xs">Sat: 9:00 AM - 1:00 PM (CST)</p>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-navy-300 text-sm">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-navy-300 text-xs flex items-center gap-1">
              <Shield className="w-3 h-3" /> Secure & Confidential
            </span>
            <span className="text-navy-300 text-xs flex items-center gap-1">
              <Award className="w-3 h-3" /> Verified Partner
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
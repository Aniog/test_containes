import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-section py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SC</span>
              </div>
              <span className="font-bold text-lg">SSourcing China</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your trusted China-based sourcing agent helping global buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/how-it-works", label: "How It Works" },
                { to: "/products", label: "Products We Source" },
                { to: "/case-studies", label: "Case Studies" },
                { to: "/blog", label: "Blog" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                "Supplier Verification",
                "Factory Audits",
                "Quality Inspection",
                "Production Monitoring",
                "Shipping Coordination",
                "Product Sourcing",
              ].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">Guangzhou, China</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-slate-400 hover:text-white text-sm transition-colors">
                  info@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+861234567890" className="text-slate-400 hover:text-white text-sm transition-colors">
                  +86 123 4567 890
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container-section py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-slate-400 text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-400 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
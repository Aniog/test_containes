import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Shield, Award, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white leading-tight">SSourcing</span>
                <span className="text-xs text-slate-400 leading-tight -mt-0.5">China</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Your trusted China-based sourcing partner. We help global buyers find reliable suppliers, verify factories, inspect quality, manage production, and coordinate shipping.
            </p>
            <div className="flex items-center gap-3 text-slate-400">
              <Shield className="w-4 h-4" />
              <Award className="w-4 h-4" />
              <Clock className="w-4 h-4" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { path: "/", label: "Home" },
                { path: "/services", label: "Services" },
                { path: "/how-it-works", label: "How It Works" },
                { path: "/products", label: "Products We Source" },
                { path: "/case-studies", label: "Case Studies" },
                { path: "/blog", label: "Blog" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2.5">
              {[
                "Supplier Sourcing & Verification",
                "Factory Audits",
                "Quality Inspection & QC",
                "Production Monitoring",
                "Logistics & Shipping",
                "Sample Management",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
                <span className="text-sm text-slate-400">
                  Guangzhou, Guangdong, China
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a
                  href="mailto:info@ssourcingchina.com"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  info@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a
                  href="tel:+861234567890"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  +86 123 4567 890
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center px-5 py-2.5 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-lg text-sm transition-colors"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
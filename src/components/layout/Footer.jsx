import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SC</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">SSourcing</span>
                <span className="text-[10px] font-medium text-neutral-400 leading-tight -mt-0.5">CHINA</span>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              Your trusted China-based sourcing partner. We help global buyers find reliable suppliers, verify factories, inspect quality, and manage production from start to shipment.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-brand-600 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-brand-600 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-brand-600 transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "How It Works", path: "/how-it-works" },
                { label: "Products We Source", path: "/products" },
                { label: "Case Studies", path: "/case-studies" },
                { label: "Blog", path: "/blog" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-neutral-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Supplier Sourcing & Verification",
                "Factory Audits",
                "Quality Inspection",
                "Production Monitoring",
                "Shipping & Logistics",
                "Sample Management",
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-sm text-neutral-400 hover:text-white transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-400 flex-shrink-0" />
                <span className="text-sm text-neutral-400">Guangzhou, Guangdong, China</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-brand-400 flex-shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-brand-400 flex-shrink-0" />
                <a href="tel:+861234567890" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  +86 123 4567 890
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link to="/contact" className="btn-accent text-sm px-5 py-2.5 inline-block">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
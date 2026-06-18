import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Globe } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Supplier Sourcing", path: "/services" },
    { label: "Factory Verification", path: "/services" },
    { label: "Quality Inspection", path: "/services" },
    { label: "Production Follow-up", path: "/services" },
    { label: "Shipping Coordination", path: "/services" },
  ],
  Company: [
    { label: "How It Works", path: "/how-it-works" },
    { label: "Products We Source", path: "/products" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Blog", path: "/blog" },
    { label: "Contact Us", path: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0D2545] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#E8621A] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="font-bold text-xl text-white">SSourcing China</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-sm">
              A professional China-based sourcing agent helping global buyers find reliable suppliers,
              verify factories, inspect quality, and coordinate shipping — end to end.
            </p>
            <div className="flex flex-col gap-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E8621A] flex-shrink-0" />
                <span>Guangzhou, China (Operations across all major manufacturing hubs)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E8621A] flex-shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#E8621A] flex-shrink-0" />
                <span>English · Français · Español · Deutsch</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{section}</h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-slate-300 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm">
            China Sourcing Agent · Supplier Verification · Quality Control · Shipping
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Supplier Sourcing", path: "/services" },
    { label: "Factory Verification", path: "/services" },
    { label: "Quality Inspection", path: "/services" },
    { label: "Production Follow-up", path: "/services" },
    { label: "Shipping Coordination", path: "/services" },
  ],
  Company: [
    { label: "About Us", path: "/" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center text-white font-bold text-sm">
                SS
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                SSourcing<span className="text-brand-400">China</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Your reliable China sourcing agent. We help global buyers find
              trustworthy suppliers, verify factories, and manage quality
              control.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400" />
                <a href="mailto:hello@ssourcingchina.com" className="hover:text-white">
                  hello@ssourcingchina.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400" />
                <a href="tel:+8613800138000" className="hover:text-white">
                  +86 138 0013 8000
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-400 mt-0.5" />
                <span>Shenzhen, Guangdong, China</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.Services.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.Company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Get Started</h4>
            <p className="text-sm text-slate-400 mb-4">
              Ready to find reliable suppliers in China? Tell us what you need
              and we will respond within 24 hours.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-lg bg-brand-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-900 transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-slate-300">Privacy Policy</Link>
            <Link to="/" className="hover:text-slate-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const serviceLinks = [
  { label: "Supplier Sourcing", path: "/services" },
  { label: "Factory Verification", path: "/services" },
  { label: "Quality Inspection", path: "/services" },
  { label: "Production Follow-up", path: "/services" },
  { label: "Shipping Coordination", path: "/services" },
];

const resourceLinks = [
  { label: "How It Works", path: "/how-it-works" },
  { label: "Products We Source", path: "/products" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Blog", path: "/blog" },
  { label: "FAQ", path: "/#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                SSourcing China
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Your reliable China sourcing partner. We help global buyers find
              verified suppliers, inspect quality, and coordinate shipping with
              transparency.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
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

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
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

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-slate-500 shrink-0" />
                <span className="text-sm text-slate-400">
                  hello@ssourcingchina.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-slate-500 shrink-0" />
                <span className="text-sm text-slate-400">
                  +86 755 8888 0000
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-slate-500 shrink-0" />
                <span className="text-sm text-slate-400">
                  18/F, Shenzhen International Trade Center, Futian District,
                  Shenzhen, China
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} SSourcing China. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded bg-gold-500 flex items-center justify-center">
                <span className="text-navy-900 font-bold text-sm">AM</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-base tracking-wide leading-tight">
                  ARTITECT
                </span>
                <span className="text-gold-400 text-[10px] tracking-[0.2em] leading-tight">
                  MACHINERY
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Precision engineering for sheet metal folding. Built to last, designed to perform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "Products", path: "/products" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              Our Products
            </h4>
            <ul className="space-y-2.5">
              {[
                "Double Folding Machine",
                "Double Folder",
                "Sheet Metal Folder",
                "Sheet Metal Folding Machine",
                "Metal Folder Machine",
                "Metal Folding Machine",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-sm text-slate-400 hover:text-gold-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">
                  123 Industrial Way, Manufacturing District, MI 48001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-sm text-slate-400 hover:text-gold-400"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href="mailto:info@artitectmachinery.com"
                  className="text-sm text-slate-400 hover:text-gold-400"
                >
                  info@artitectmachinery.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-slate-500 hover:text-slate-400 cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-xs text-slate-500 hover:text-slate-400 cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

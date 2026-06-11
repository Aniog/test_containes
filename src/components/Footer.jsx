import { Link } from "react-router-dom";
import { Globe2, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white text-slate-900">
                <Globe2 className="w-5 h-5" />
              </span>
              <span className="font-bold text-white tracking-tight text-lg">
                SSourcing<span className="text-amber-400">.</span>China
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              A China-based sourcing partner for global B2B buyers. We help you
              find reliable suppliers, verify factories, run quality
              inspections, follow production, and coordinate shipping.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-white">Factory Verification</Link></li>
              <li><Link to="/services" className="hover:text-white">Quality Inspection</Link></li>
              <li><Link to="/services" className="hover:text-white">Production Follow-up</Link></li>
              <li><Link to="/services" className="hover:text-white">Shipping & Logistics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-white">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
                <span>Yiwu, Zhejiang, China</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
                <span>contact@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
                <span>+86 138 0000 0000 (WhatsApp / WeChat)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <p>B2B sourcing services for global buyers.</p>
        </div>
      </div>
    </footer>
  );
}

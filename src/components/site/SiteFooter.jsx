import { Link } from "react-router-dom";
import { Anchor, Mail, Phone, MapPin } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="bg-brand text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white">
                <Anchor className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold tracking-tight">
                SSourcing China
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-300 leading-relaxed max-w-xs">
              A China-based sourcing agent helping global B2B buyers find
              reliable suppliers, verify factories, inspect quality, and
              coordinate shipping.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><Link to="/services" className="hover:text-white">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-white">Factory Audits</Link></li>
              <li><Link to="/services" className="hover:text-white">Quality Inspection</Link></li>
              <li><Link to="/services" className="hover:text-white">Production Follow-up</Link></li>
              <li><Link to="/services" className="hover:text-white">Shipping &amp; Logistics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-white">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-white/70 shrink-0" />
                <span>Room 1208, Yiwu International Trade City, Zhejiang, China</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-white/70 shrink-0" />
                <a href="mailto:hello@ssourcing-china.com" className="hover:text-white">
                  hello@ssourcing-china.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-white/70 shrink-0" />
                <span>+86 138 0000 0000 (WhatsApp / WeChat)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <p>Sourcing • Verification • Quality Control • Logistics</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;

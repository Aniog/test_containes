import { Link } from "react-router-dom";
import { Anchor, Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white text-brand-navy">
                <Anchor className="h-5 w-5" />
              </span>
              <span className="text-lg font-extrabold tracking-tight text-white">
                SSourcing China
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              A China-based sourcing agent helping overseas buyers find reliable
              suppliers, verify factories, inspect quality, follow production,
              and coordinate shipping.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-white">Factory Verification</Link></li>
              <li><Link to="/services" className="hover:text-white">Quality Inspection</Link></li>
              <li><Link to="/services" className="hover:text-white">Production Follow-up</Link></li>
              <li><Link to="/services" className="hover:text-white">Shipping & Logistics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-white">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                <span>Room 1802, Block B, Futian District, Shenzhen, China</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-brand-accent" />
                <a href="mailto:hello@ssourcing-china.com" className="hover:text-white">
                  hello@ssourcing-china.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-brand-accent" />
                <a href="tel:+8675588889999" className="hover:text-white">
                  +86 755 8888 9999
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Linkedin className="h-4 w-4 shrink-0 text-brand-accent" />
                <span>linkedin.com/company/ssourcing-china</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <p>Sourcing • Inspection • Logistics — based in Shenzhen, serving buyers worldwide.</p>
        </div>
      </div>
    </footer>
  );
}

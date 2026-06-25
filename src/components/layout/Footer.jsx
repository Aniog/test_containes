import { Link } from "react-router-dom";
import { Ship, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-line bg-brand text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white">
                <Ship className="h-5 w-5" strokeWidth={2.25} />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-base font-bold tracking-tight">SSourcing China</span>
                <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/60">
                  Sourcing Agent
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/75 max-w-xs">
              A China-based sourcing team helping global buyers find verified suppliers,
              inspect quality, and ship on time.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase text-white/90">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              <li><Link to="/services" className="hover:text-white">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-white">Factory Verification</Link></li>
              <li><Link to="/services" className="hover:text-white">Quality Inspection</Link></li>
              <li><Link to="/services" className="hover:text-white">Production Follow-up</Link></li>
              <li><Link to="/services" className="hover:text-white">Shipping & Logistics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase text-white/90">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-white">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase text-white/90">Get in touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-white/70" />
                <span>hello@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-white/70" />
                <span>+86 138 0000 0000 (WhatsApp / WeChat)</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-white/70" />
                <span>Yiwu · Shenzhen · Guangzhou, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-xs text-white/60">
            © {year} SSourcing China. All rights reserved.
          </p>
          <p className="text-xs text-white/60">
            Operating hours: Mon–Sat · GMT+8 · Replies within one business day.
          </p>
        </div>
      </div>
    </footer>
  );
}

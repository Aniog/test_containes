import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";
import { NAV, SITE } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-200">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand-500 text-white font-bold">
                SS
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[15px] font-bold text-white">SSourcing China</span>
                <span className="text-[11px] text-ink-400">Sourcing · QC · Shipping</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ink-300 max-w-sm">
              {SITE.shortDescription}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                aria-label="LinkedIn"
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-ink-700 text-ink-300 hover:border-brand-400 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                aria-label="Website"
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-ink-700 text-ink-300 hover:border-brand-400 hover:text-white"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-ink-300 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/services" className="text-ink-300 hover:text-white">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="text-ink-300 hover:text-white">Factory Verification</Link></li>
              <li><Link to="/services" className="text-ink-300 hover:text-white">Quality Inspection</Link></li>
              <li><Link to="/services" className="text-ink-300 hover:text-white">Production Follow-up</Link></li>
              <li><Link to="/services" className="text-ink-300 hover:text-white">Shipping & Logistics</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand-300" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-brand-300" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-brand-300" />
                <a href={`tel:${SITE.phone.replace(/\s+/g, "")}`} className="hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li className="text-ink-400 text-xs pt-1">WeChat: {SITE.wechat}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-800">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-ink-400">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>{SITE.englishSupport} · {SITE.responseTime} response.</p>
        </div>
      </div>
    </footer>
  );
}

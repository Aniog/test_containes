import { Link } from "react-router-dom";
import { Container, Mail, Phone, MapPin, Clock } from "lucide-react";
import { NAV_LINKS, SITE, SERVICES } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-600 text-white">
                <Container className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold text-white tracking-tight">
                {SITE.name}
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-xs">
              A China-based sourcing agent helping overseas buyers find reliable suppliers,
              verify factories, inspect quality, and ship worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link
                    to="/services"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-amber-500 flex-shrink-0" />
                <span className="text-slate-400">{SITE.addressShort}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 mt-0.5 text-amber-500 flex-shrink-0" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-slate-400 hover:text-white transition-colors break-all"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 mt-0.5 text-amber-500 flex-shrink-0" />
                <span className="text-slate-400">{SITE.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 mt-0.5 text-amber-500 flex-shrink-0" />
                <span className="text-slate-400">{SITE.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Information on this site is provided for general guidance and does not constitute legal,
            trade or shipping advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageSquare, Linkedin, Facebook } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-slate-200">
      <div className="container-x py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <span className="w-9 h-9 rounded-md bg-white text-ink flex items-center justify-center font-bold text-lg">
                SS
              </span>
              <span className="text-lg font-bold text-white">SSourcing China</span>
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              A B2B China sourcing agent helping overseas buyers find reliable suppliers,
              verify factories, inspect quality, follow production, and coordinate shipping.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`} aria-label="WhatsApp" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-slate-300 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link to={`/services#${s.id}`} className="text-slate-300 hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
                <span>{COMPANY.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
                <span>WhatsApp: {COMPANY.whatsapp}</span>
              </li>
            </ul>
            <p className="text-xs text-slate-400 mt-4 leading-relaxed">
              We reply to all inquiries within one business day. Languages: {COMPANY.languages.join(", ")}.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <span>{COMPANY.hours}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

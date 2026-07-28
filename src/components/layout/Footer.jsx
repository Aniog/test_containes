import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-brand-navyDark text-white">
      <div className="max-w-container mx-auto container-px py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white text-brand-navy font-bold">
                SS
              </span>
              <span className="text-lg font-bold">SSourcing China</span>
            </div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-sm">
              A China-based sourcing partner for overseas buyers. We help you
              find suppliers, verify factories, inspect quality, and ship on
              time.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-white/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-white/60 shrink-0" />
                <span>{COMPANY.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white/60 shrink-0" />
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {COMPANY.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white/60 shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold tracking-wide uppercase text-white/60">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold tracking-wide uppercase text-white/60">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/services" className="text-white/80 hover:text-white">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white">Supplier Verification</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white">Quality Inspection</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white">Production Follow-Up</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white">Shipping & Logistics</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white">Sample Management</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold tracking-wide uppercase text-white/60">
              Office hours
            </h4>
            <p className="mt-4 text-sm text-white/80">
              {COMPANY.hours}
            </p>
            <p className="mt-2 text-sm text-white/60">
              Account managers reply in English. We overlap with US, EU, AU,
              and Middle East business hours.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Website"
                className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/55">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p>
            SSourcing China is a sourcing agent, not a trading company. Quotes
            are provided on a service-fee basis.
          </p>
        </div>
      </div>
    </footer>
  );
}

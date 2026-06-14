import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Linkedin, Globe2 } from "lucide-react";
import { COMPANY, NAV } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white">
      <div className="container-x py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand text-white font-extrabold">
                SS
              </span>
              <span className="text-base font-bold tracking-tight">SSourcing China</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/70 max-w-sm">
              A B2B sourcing agent based in China. We help overseas importers find, verify, inspect, and ship from Chinese factories with clear reporting and predictable costs.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase text-white/80">Sitemap</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-white/70 hover:text-white transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase text-white/80">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 mt-0.5 text-brand" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white">{COMPANY.email}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 mt-0.5 text-brand" />
                <span>{COMPANY.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-brand" />
                <span>{COMPANY.headquarters}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 mt-0.5 text-brand" />
                <span>{COMPANY.hours}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase text-white/80">Working with us</h3>
            <p className="mt-4 text-sm text-white/70 leading-6">
              Most buyers start with a short brief. We reply within one business day with a shortlist of factories and indicative pricing.
            </p>
            <Link to="/contact" className="btn-primary mt-5 w-full sm:w-auto">
              Get a Free Sourcing Quote
            </Link>
            <div className="mt-6 flex items-center gap-4 text-white/60">
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <span className="inline-flex items-center gap-1.5 text-xs">
                <Globe2 className="h-3.5 w-3.5" />
                English · 中文
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/55">
          <p>© {year} SSourcing China. All rights reserved.</p>
          <p className="max-w-2xl">
            Information on this site is general guidance for importers. Pricing, lead times, and compliance requirements vary by product, factory, and destination market — confirm specifics before placing an order.
          </p>
        </div>
      </div>
    </footer>
  );
}

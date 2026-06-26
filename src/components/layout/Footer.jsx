import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe2 } from "lucide-react";
import { COMPANY, NAV, SERVICES } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-brand-900 text-ink-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white text-brand-900 font-semibold tracking-tight">
                SS
              </span>
              <span className="text-base font-semibold text-white">
                {COMPANY.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-300">
              A China-based sourcing agent helping overseas buyers find reliable
              suppliers, verify factories, inspect quality, and coordinate
              shipping.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-ink-300">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" />
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" />
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Globe2 className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" />
                <span>{COMPANY.hours}</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-ink-300 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to="/services"
                    className="text-ink-300 hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white">Get a quote</h3>
            <p className="mt-4 text-sm text-ink-300">
              Tell us what you need. We'll respond within one business day with
              an initial assessment and supplier shortlist.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center justify-center rounded-md bg-accent-600 px-4 py-2 text-sm font-semibold text-white hover:bg-accent-700"
            >
              Request a Free Quote
            </Link>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-ink-400">Suppliers verified</dt>
                <dd className="text-lg font-semibold text-white">
                  {COMPANY.suppliersVerified.toLocaleString()}+
                </dd>
              </div>
              <div>
                <dt className="text-ink-400">Inspections / year</dt>
                <dd className="text-lg font-semibold text-white">
                  {COMPANY.inspectionsPerYear.toLocaleString()}+
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink-700 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p>
            Built for overseas buyers sourcing from China. Prices and lead times
            are indicative and confirmed per project.
          </p>
        </div>
      </div>
    </footer>
  );
}
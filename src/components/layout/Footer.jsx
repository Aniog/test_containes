import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Globe2 } from "lucide-react";

const linkClass = "text-sm text-white/70 hover:text-white transition-colors";

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="container-x py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white text-sm font-bold text-brand-ink">
                SS
              </span>
              <span className="text-lg font-bold text-white">SSourcing China</span>
            </div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              A China-based sourcing agent helping overseas buyers find reliable
              suppliers, verify factories, inspect quality, follow production, and
              coordinate shipping.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/80 hover:text-white hover:border-white/40"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@ssourcingchina.com"
                aria-label="Email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/80 hover:text-white hover:border-white/40"
              >
                <Globe2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li><Link to="/services" className={linkClass}>Supplier Sourcing</Link></li>
              <li><Link to="/services" className={linkClass}>Factory Verification</Link></li>
              <li><Link to="/services" className={linkClass}>Quality Inspection</Link></li>
              <li><Link to="/services" className={linkClass}>Production Follow-up</Link></li>
              <li><Link to="/services" className={linkClass}>Shipping & Logistics</Link></li>
              <li><Link to="/services" className={linkClass}>Sample Consolidation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li><Link to="/how-it-works" className={linkClass}>How It Works</Link></li>
              <li><Link to="/products" className={linkClass}>Products We Source</Link></li>
              <li><Link to="/case-studies" className={linkClass}>Case Studies</Link></li>
              <li><Link to="/blog" className={linkClass}>Blog</Link></li>
              <li><Link to="/contact" className={linkClass}>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 mt-0.5 text-brand-accent" />
                <a href="mailto:hello@ssourcingchina.com" className="hover:text-white">
                  hello@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 mt-0.5 text-brand-accent" />
                <a href="tel:+8613800000000" className="hover:text-white">
                  +86 138 0000 0000
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-brand-accent" />
                <span>Yiwu, Zhejiang, China<br />Office hours: Mon–Sat 9:00–18:00 CST</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <p>China sourcing agent for global buyers · English & Mandarin support</p>
        </div>
      </div>
    </footer>
  );
}

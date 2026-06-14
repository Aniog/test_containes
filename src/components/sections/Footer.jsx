import React from "react";
import { Linkedin, Youtube, Twitter, ArrowUpRight } from "lucide-react";
import { BRAND, NAV_LINKS, PRODUCTS } from "@/data/site";

const LogoMark = ({ className = "" }) => (
  <svg
    className={className}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M6 10 L16 5 L26 10 L26 22 L16 27 L6 22 Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M6 10 L16 15 L26 10"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M16 15 L16 27"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <LogoMark className="text-brand-brass" />
              <div className="leading-none">
                <div className="font-display font-semibold text-white text-lg">
                  ARTITECT
                </div>
                <div className="text-[10px] tracking-eyebrow uppercase text-white/50 mt-1">
                  Machinery
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/65 leading-relaxed max-w-sm">
              {BRAND.description}
            </p>

            <div className="mt-8 flex items-center gap-3">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Youtube, label: "YouTube" },
                { Icon: Twitter, label: "X" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white/80 hover:text-brand-brass hover:border-brand-brass transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[11px] tracking-eyebrow uppercase text-brand-brass font-semibold">
              Site
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/75 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] tracking-eyebrow uppercase text-brand-brass font-semibold">
              Machines
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {PRODUCTS.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <a
                    href="#products"
                    className="text-white/75 hover:text-white transition-colors"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] tracking-eyebrow uppercase text-brand-brass font-semibold">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>
                <a
                  href={`mailto:${BRAND.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {BRAND.contact.email}
                </a>
              </li>
              <li>{BRAND.contact.phone}</li>
              <li>{BRAND.contact.address}</li>
              <li>{BRAND.contact.hours}</li>
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm text-brand-brass hover:text-brand-brass-soft transition-colors"
            >
              Request a quote
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} ARTITECT MACHINERY · All rights
            reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {BRAND.certifications.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

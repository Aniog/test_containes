import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, PhoneCall, Linkedin, ShieldCheck } from "lucide-react";
import { nav } from "@/data/site";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-white">
      <div className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5" aria-label="SSourcing China">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-ink-900">
                <span className="text-[16px] font-bold leading-none">S</span>
              </span>
              <span className="flex items-baseline gap-1.5">
                <span className="text-[18px] font-bold tracking-tight text-white">
                  SSourcing
                </span>
                <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-accent-500">
                  China
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed text-white/70">
              A China-based sourcing agent for global buyers. We find reliable
              suppliers, verify factories, inspect quality, follow production
              and coordinate shipping — in plain English.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-[14px] text-white/80">
              <span className="inline-flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                <span>
                  Office: 12F, Saige Plaza, Huaqiang North,
                  <br />
                  Shenzhen 518031, China
                </span>
              </span>
              <a
                href="mailto:hello@ssourcing-china.com"
                className="inline-flex items-center gap-2.5 hover:text-white"
              >
                <Mail className="h-4 w-4 text-accent-500" />
                hello@ssourcing-china.com
              </a>
              <a
                href="tel:+8675588881234"
                className="inline-flex items-center gap-2.5 hover:text-white"
              >
                <PhoneCall className="h-4 w-4 text-accent-500" />
                +86 755 8888 1234
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60">
              Sitemap
            </p>
            <ul className="mt-4 space-y-2.5 text-[14.5px] text-white/80">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60">
              Services
            </p>
            <ul className="mt-4 space-y-2.5 text-[14.5px] text-white/80">
              <li>Supplier sourcing & shortlisting</li>
              <li>Factory verification & audit</li>
              <li>Quality inspection (AQL)</li>
              <li>Production follow-up</li>
              <li>Shipping, FBA & DDP logistics</li>
              <li>Sampling & prototyping</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60">
              Operating since 2014
            </p>
            <p className="mt-4 text-[14.5px] text-white/80">
              We work with importers, Amazon sellers, brand owners and
              wholesalers in 24 countries. NDAs signed on request.
            </p>
            <div className="mt-5 flex items-center gap-2 rounded-md border border-white/15 px-3 py-2.5 text-[13px] text-white/80">
              <ShieldCheck className="h-4 w-4 text-accent-500" />
              Trade license verified · 91440300MA5DX…
            </div>
            <a
              href="#"
              className="mt-5 inline-flex items-center gap-2 text-[14px] font-medium text-white/90 hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-[13px] text-white/60 md:flex-row md:items-center">
          <p>© {year} SSourcing China. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
            <a href="#" className="hover:text-white">
              Privacy policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of service
            </a>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-accent-500" />
              This site is a marketing preview
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

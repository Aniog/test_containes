import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../../data/site.js";

const linkColumns = [
  {
    title: "Services",
    links: [
      { to: "/services#supplier-search", label: "Supplier search" },
      { to: "/services#factory-verification", label: "Factory verification" },
      { to: "/services#quality-inspection", label: "Quality inspection" },
      { to: "/services#production-follow-up", label: "Production follow-up" },
      { to: "/services#shipping", label: "Shipping" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/how-it-works", label: "How it works" },
      { to: "/products", label: "Products we source" },
      { to: "/case-studies", label: "Case studies" },
      { to: "/blog", label: "Blog" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/blog?category=Sourcing%20Basics", label: "Sourcing basics" },
      { to: "/blog?category=Quality%20Control", label: "Quality control" },
      { to: "/blog?category=Logistics", label: "Logistics" },
      { to: "/blog?category=Private%20Label", label: "Private label" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="container-content py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-md bg-white text-navy flex items-center justify-center font-bold">
                SS
              </div>
              <div>
                <div className="text-white font-bold text-lg">SSourcing China</div>
                <div className="text-xs text-white/60 uppercase tracking-[0.18em]">
                  Your sourcing agent in China
                </div>
              </div>
            </Link>
            <p className="mt-4 text-white/70 max-w-md">
              A China-based sourcing agent helping overseas buyers find reliable suppliers,
              verify factories, inspect quality, follow production, and coordinate shipping.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/80">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-accent">
                <Mail className="w-4 h-4" /> {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-accent">
                <Phone className="w-4 h-4" /> {siteConfig.phone}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-accent"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp: {siteConfig.whatsapp}
              </a>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4" /> {siteConfig.address}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {linkColumns.map((col) => (
              <div key={col.title}>
                <div className="text-xs uppercase tracking-[0.18em] text-white/60 font-semibold mb-3">
                  {col.title}
                </div>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="text-sm text-white/80 hover:text-accent inline-flex items-center gap-1"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-white/60">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>{siteConfig.hours}</span>
            <Link to="/contact" className="text-white hover:text-accent inline-flex items-center gap-1">
              Request a quote <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

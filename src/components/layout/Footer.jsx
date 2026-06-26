import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Linkedin, Send } from "lucide-react";

const linkSections = [
  {
    title: "Services",
    links: [
      { to: "/services", label: "Supplier Sourcing" },
      { to: "/services", label: "Factory Verification" },
      { to: "/services", label: "Quality Inspections" },
      { to: "/services", label: "Production Follow-up" },
      { to: "/services", label: "Shipping & Logistics" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/how-it-works", label: "How It Works" },
      { to: "/case-studies", label: "Case Studies" },
      { to: "/blog", label: "Blog" },
      { to: "/contact", label: "Contact Us" },
    ],
  },
  {
    title: "Products",
    links: [
      { to: "/products", label: "Consumer Products" },
      { to: "/products", label: "Industrial & Hardware" },
      { to: "/products", label: "Home & Garden" },
      { to: "/products", label: "Apparel & Textiles" },
      { to: "/products", label: "Custom OEM / ODM" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-ink-900 text-ink-100">
      <div className="container-x py-14 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white text-ink-900 font-bold text-sm">
              SS
            </span>
            <span className="font-bold text-white text-base">SSourcing China</span>
          </div>
          <p className="text-sm leading-relaxed text-ink-100/85 max-w-sm">
            A China-based sourcing partner for international buyers. We help you
            find reliable suppliers, verify factories, inspect quality, follow
            production, and coordinate shipping.
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-1 text-ink-100/70" />
              <span className="text-ink-100/85">
                Room 1208, Tower B, Yueda 889, Xuhui District, Shanghai 200030, China
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-ink-100/70" />
              <a
                href="mailto:hello@ssourcingchina.com"
                className="text-ink-100/85 hover:text-white"
              >
                hello@ssourcingchina.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-ink-100/70" />
              <span className="text-ink-100/85">+86 21 0000 0000 (Mon–Fri, GMT+8)</span>
            </div>
          </div>
        </div>

        {linkSections.map((section) => (
          <div key={section.title} className="md:col-span-2">
            <h4 className="text-white text-sm font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-2.5">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className="text-sm text-ink-100/75 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-2">
          <h4 className="text-white text-sm font-semibold mb-4">Stay Updated</h4>
          <p className="text-sm text-ink-100/75 mb-3">
            Practical guides on sourcing from China. No spam, unsubscribe anytime.
          </p>
          <form
            className="flex items-stretch gap-0 rounded-md overflow-hidden bg-white/5 border border-white/10"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder:text-ink-100/50 focus:outline-none"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="px-3 bg-accent text-white hover:bg-accent-hover transition-colors"
              aria-label="Subscribe"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-5 text-sm text-ink-100/75 hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" /> Connect on LinkedIn
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ink-100/60">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
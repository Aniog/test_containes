import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Globe } from "lucide-react";

const linkGroups = [
  {
    title: "Services",
    links: [
      { to: "/services", label: "Supplier Sourcing" },
      { to: "/services", label: "Factory Audit" },
      { to: "/services", label: "Quality Inspection" },
      { to: "/services", label: "Production Follow-up" },
      { to: "/services", label: "Shipping & Logistics" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/how-it-works", label: "How It Works" },
      { to: "/case-studies", label: "Case Studies" },
      { to: "/products", label: "Products We Source" },
      { to: "/blog", label: "Blog" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Sourcing Hubs",
    links: [
      { to: "/products", label: "Yiwu Market" },
      { to: "/products", label: "Ningbo Industrial" },
      { to: "/products", label: "Shenzhen Electronics" },
      { to: "/products", label: "Foshan Furniture" },
      { to: "/products", label: "Hangzhou Textiles" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-white text-navy-900 font-bold">
                S
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-base font-bold text-white">SSourcing</span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-white/60">
                  China
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-sm">
              A China-based sourcing agent helping overseas buyers find reliable
              suppliers, verify factories, inspect quality, follow production and
              coordinate shipping — from inquiry to delivered cargo.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
                <span>Office: Ningbo, Zhejiang, China</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
                <a href="mailto:hello@ssourcing.cn" className="hover:text-white">
                  hello@ssourcing.cn
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
                <span>+86 574 0000 0000 (Mon–Sat, 9:00–18:00 CST)</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
                <span>Serving buyers in 60+ countries</span>
              </li>
            </ul>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title} className="lg:col-span-2">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/60">
                {group.title}
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-white/80 hover:text-white transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/60">
              Compliance
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              <li>BSCI Audit Familiar</li>
              <li>SEDEX / SMETA</li>
              <li>ISO 9001 Process</li>
              <li>CE / FCC / RoHS</li>
              <li>FSC / OEKO-TEX</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <p>
            Based in Ningbo & Yiwu · Operating across mainland China ·
            English-speaking project managers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

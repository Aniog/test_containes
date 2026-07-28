import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Linkedin, Globe2 } from "lucide-react";

const services = [
  { to: "/services#sourcing", label: "Supplier Sourcing" },
  { to: "/services#verification", label: "Factory Verification" },
  { to: "/services#qc", label: "Quality Inspections" },
  { to: "/services#production", label: "Production Follow-up" },
  { to: "/services#shipping", label: "Shipping & Logistics" },
];

const company = [
  { to: "/how-it-works", label: "How It Works" },
  { to: "/products", label: "Products We Source" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Blog & Guides" },
  { to: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-md bg-white text-brand-800 flex items-center justify-center font-bold">
                SS
              </div>
              <span className="text-lg font-bold">SSourcing China</span>
            </div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              A China-based sourcing agent helping overseas buyers find
              reliable suppliers, verify factories, inspect quality, and
              coordinate shipping end-to-end.
            </p>
            <div className="mt-5 flex items-center gap-3 text-white/70">
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-md border border-white/15 flex items-center justify-center hover:border-white/40 hover:text-white"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@ssourcing.cn"
                aria-label="Email"
                className="w-9 h-9 rounded-md border border-white/15 flex items-center justify-center hover:border-white/40 hover:text-white"
              >
                <Mail className="w-4 h-4" />
              </a>
              <span className="w-9 h-9 rounded-md border border-white/15 flex items-center justify-center">
                <Globe2 className="w-4 h-4" />
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white/80">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-white/70 hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white/80">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {company.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-white/70 hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white/80">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent-500 flex-shrink-0" />
                <span>
                  Shenzhen, Guangdong, China
                  <br />
                  <span className="text-white/50">
                    Operations across Guangdong, Zhejiang, Jiangsu, Fujian
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent-500 flex-shrink-0" />
                <a
                  href="mailto:hello@ssourcing.cn"
                  className="hover:text-white"
                >
                  hello@ssourcing.cn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent-500 flex-shrink-0" />
                <span>+86 755 0000 0000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <p>
            Based in China · Serving buyers in North America, Europe, the
            Middle East, and Oceania.
          </p>
        </div>
      </div>
    </footer>
  );
}

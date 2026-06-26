import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const SERVICES = [
  { label: "Supplier Sourcing", to: "/services#sourcing" },
  { label: "Factory Verification", to: "/services#verification" },
  { label: "Quality Inspection (QC)", to: "/services#qc" },
  { label: "Production Follow-up", to: "/services#production" },
  { label: "Shipping Coordination", to: "/services#shipping" },
];

const COMPANY = [
  { label: "About SSourcing China", to: "/services" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Products We Source", to: "/products" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Blog & Insights", to: "/blog" },
];

const RESOURCES = [
  { label: "Contact Us", to: "/contact" },
  { label: "Request a Quote", to: "/contact" },
  { label: "Privacy Policy", to: "/contact" },
  { label: "Terms of Service", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0E2A47] text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#0E2A47] font-display text-lg font-semibold">
                S
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-[15px] font-semibold tracking-tight text-white">
                  SSourcing <span className="text-[#E8A33D]">China</span>
                </span>
                <span className="text-[10.5px] font-medium tracking-[0.18em] uppercase text-white/60 mt-0.5">
                  Your Sourcing Partner
                </span>
              </span>
            </div>
            <p className="mt-5 text-[14.5px] leading-relaxed text-white/75 max-w-sm">
              A China-based sourcing agent helping overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — end to end.
            </p>
            <ul className="mt-6 space-y-3 text-[14px] text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[#E8A33D] shrink-0" />
                <span>Shenzhen, Guangdong, China</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-[#E8A33D] shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white">
                  info@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-[#E8A33D] shrink-0" />
                <a href="tel:+8675500000000" className="hover:text-white">
                  +86 755 0000 0000
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-white/60">Services</h4>
            <ul className="mt-5 space-y-3 text-[14px]">
              {SERVICES.map((s) => (
                <li key={s.label}>
                  <Link to={s.to} className="text-white/80 hover:text-[#E8A33D] transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-white/60">Company</h4>
            <ul className="mt-5 space-y-3 text-[14px]">
              {COMPANY.map((s) => (
                <li key={s.label}>
                  <Link to={s.to} className="text-white/80 hover:text-[#E8A33D] transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-white/60">Resources</h4>
            <ul className="mt-5 space-y-3 text-[14px]">
              {RESOURCES.map((s) => (
                <li key={s.label}>
                  <Link to={s.to} className="text-white/80 hover:text-[#E8A33D] transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-white/60">Get in touch</h4>
            <p className="mt-5 text-[14px] text-white/80 leading-relaxed">
              Tell us what you need to source. We typically reply within one business day.
            </p>
            <Link to="/contact" className="btn-primary mt-5 w-full">
              Request a Quote
            </Link>
            <div className="mt-5 flex items-center gap-3 text-white/70">
              <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="h-4 w-4" /></a>
              <a href="#" aria-label="Website" className="hover:text-white"><Globe className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[12.5px] text-white/55">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <p>Professional sourcing services for global buyers. Shenzhen · Hong Kong · Yiwu.</p>
        </div>
      </div>
    </footer>
  );
}
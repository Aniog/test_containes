import { Link } from "react-router-dom";
import { Ship, Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#0b2545] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-white text-[#0b2545]">
                <Ship className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-base font-bold text-white">SSourcing China</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">
                  China Sourcing Agent
                </span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              A China-based sourcing partner for overseas buyers. We help you find verified
              suppliers, control quality, and ship goods worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Supplier Sourcing</li>
              <li>Factory Verification</li>
              <li>Quality Inspection</li>
              <li>Production Follow-up</li>
              <li>Shipping & Logistics</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <span>Yiwu, Zhejiang, China</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <a href="mailto:hello@ssourcingchina.com" className="hover:text-white">
                  hello@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <span>+86 138 0000 0000 (WhatsApp / WeChat)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Linkedin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <span>linkedin.com/company/ssourcing-china</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <p>Business hours: Mon-Sat, 9:00 - 18:30 China Standard Time (GMT+8)</p>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-x py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2 max-w-md">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-slate-900 font-bold">
                S
              </div>
              <div className="leading-tight">
                <div className="text-base font-semibold text-white">SSourcing</div>
                <div className="text-[11px] font-medium uppercase tracking-widest text-slate-400">
                  China
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              A China-based sourcing agent helping global buyers find vetted suppliers,
              verify factories, inspect quality, follow production, and coordinate
              shipping — clearly and on schedule.
            </p>
            <div className="mt-5 space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-500" />
                Yiwu, Zhejiang, China
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-500" />
                hello@ssourcing-china.com
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-500" />
                +86 138 0000 0000 (WhatsApp / WeChat)
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-white">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Get started</h4>
            <p className="mt-4 text-sm text-slate-400">
              Tell us what you need to source. We reply within one business day with
              a clear scope and quote.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700 transition"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-800 pt-6 md:flex-row md:items-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Sourcing • Factory verification • QC inspection • Shipping
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

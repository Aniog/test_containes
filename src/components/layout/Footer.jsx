import { Link } from 'react-router-dom';
import { Ship, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand text-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white text-brand">
                <Ship className="h-5 w-5" />
              </span>
              <span className="font-bold text-lg tracking-tight text-white">
                SSourcing China
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              A China-based sourcing partner for overseas buyers.
              Supplier verification, quality control, production
              follow-up and shipping coordination — all under one roof.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/services" className="hover:text-white">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-white">Factory Verification</Link></li>
              <li><Link to="/services" className="hover:text-white">Quality Inspection</Link></li>
              <li><Link to="/services" className="hover:text-white">Production Follow-up</Link></li>
              <li><Link to="/services" className="hover:text-white">Shipping & Logistics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-white">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-slate-400" />
                <span>Yiwu &amp; Shenzhen, China</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-slate-400" />
                <a href="mailto:hello@ssourcing-china.com" className="hover:text-white">
                  hello@ssourcing-china.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-slate-400" />
                <span>+86 137 0000 0000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <p>Sourcing • Inspection • Logistics — based in China, working with buyers worldwide.</p>
        </div>
      </div>
    </footer>
  );
}

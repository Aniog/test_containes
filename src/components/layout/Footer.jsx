import { Link } from 'react-router-dom';
import { Globe2, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white text-slate-900">
                <Globe2 className="w-5 h-5" />
              </span>
              <span className="font-bold text-white text-lg tracking-tight">
                SSourcing China
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              A China-based sourcing partner helping overseas buyers find reliable
              suppliers, control quality, and ship with confidence.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-slate-400 hover:text-white">Services</Link></li>
              <li><Link to="/how-it-works" className="text-slate-400 hover:text-white">How It Works</Link></li>
              <li><Link to="/case-studies" className="text-slate-400 hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Sourcing</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="text-slate-400 hover:text-white">Products We Source</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white">Supplier Verification</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white">Quality Inspection</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white">Shipping & Logistics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
                <span className="text-slate-400">Yiwu, Zhejiang, China</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
                <a href="mailto:hello@ssourcingchina.com" className="text-slate-400 hover:text-white">
                  hello@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
                <span className="text-slate-400">+86 138 0000 0000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            B2B sourcing services for global buyers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

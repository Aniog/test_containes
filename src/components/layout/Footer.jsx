import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Supplier Sourcing', path: '/services' },
    { label: 'Factory Verification', path: '/services' },
    { label: 'Quality Inspection', path: '/services' },
    { label: 'Production Follow-up', path: '/services' },
    { label: 'Shipping & Logistics', path: '/services' },
  ],
  Company: [
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Products We Source', path: '/products' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact Us', path: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-orange rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                SSourcing<span className="text-brand-orange">China</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-5">
              China-based sourcing agent helping global buyers find reliable suppliers, verify factories, and manage quality from order to delivery.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-slate-700 hover:bg-brand-orange rounded-md flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-700 hover:bg-brand-orange rounded-md flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-700 hover:bg-brand-orange rounded-md flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">{section}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">Guangzhou, Guangdong, China</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-sm text-slate-400 hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <a href="tel:+8620XXXXXXXX" className="text-sm text-slate-400 hover:text-white transition-colors">
                  +86 20 XXXX XXXX
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <Link
                to="/contact"
                className="inline-block bg-brand-orange hover:bg-orange-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

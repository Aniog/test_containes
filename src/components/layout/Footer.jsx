import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Linkedin, Twitter, Globe } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Supplier Sourcing', path: '/services' },
    { label: 'Factory Verification', path: '/services' },
    { label: 'Quality Inspection', path: '/services' },
    { label: 'Production Follow-up', path: '/services' },
    { label: 'Shipping Coordination', path: '/services' },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-accent rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="font-bold text-white text-lg">
                SSourcing China
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              A China-based sourcing agent helping global buyers find reliable suppliers,
              verify factories, inspect quality, and coordinate shipping — with transparency
              at every step.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 flex-shrink-0 text-brand-accent" />
                <span>Shenzhen, Guangdong, China</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 flex-shrink-0 text-brand-accent" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Globe className="w-4 h-4 flex-shrink-0 text-brand-accent" />
                <span>English · Français · Español · Deutsch</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {section}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-700 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            China Sourcing Agent · Supplier Verification · Quality Control · Shipping
          </p>
        </div>
      </div>
    </footer>
  );
}

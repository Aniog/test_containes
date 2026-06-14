import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Linkedin, Globe } from 'lucide-react';

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
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-brand-navy font-bold text-sm">S</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                SSourcing <span className="text-red-400">China</span>
              </span>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-6 max-w-sm">
              A professional China-based sourcing agent helping global buyers find reliable suppliers,
              verify factories, inspect quality, and coordinate shipping.
            </p>
            <div className="space-y-2 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>Guangzhou, China (serving buyers worldwide)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-red flex-shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>+86 (0)20 0000 0000</span>
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
                      className="text-blue-200 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-blue-900 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p className="text-blue-300 text-sm">
            China Sourcing Agent | Supplier Verification | Quality Control | Shipping
          </p>
        </div>
      </div>
    </footer>
  );
}

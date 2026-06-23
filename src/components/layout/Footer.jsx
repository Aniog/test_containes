import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

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
    <footer className="bg-brand-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-extrabold text-lg tracking-tight">SSourcing</span>
                <span className="text-brand-sky text-xs font-semibold tracking-widest uppercase">China</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Your trusted China-based sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality from order to delivery.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-brand-blue rounded-md flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-brand-blue rounded-md flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-brand-blue rounded-md flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-sky mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">Guangzhou, Guangdong, China</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-sky flex-shrink-0" />
                <a href="mailto:info@ssourcing.cn" className="text-sm text-gray-400 hover:text-white transition-colors">
                  info@ssourcing.cn
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-sky flex-shrink-0" />
                <a href="tel:+8620XXXXXXXX" className="text-sm text-gray-400 hover:text-white transition-colors">
                  +86 20 XXXX XXXX
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <Link
                to="/contact"
                className="inline-block bg-brand-blue hover:bg-brand-sky text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            China Sourcing Agent | Supplier Verification | Quality Control | Shipping
          </p>
        </div>
      </div>
    </footer>
  );
}

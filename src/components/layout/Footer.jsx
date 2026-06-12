import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Supplier Sourcing', path: '/services#sourcing' },
    { label: 'Factory Verification', path: '/services#verification' },
    { label: 'Quality Inspection', path: '/services#inspection' },
    { label: 'Production Follow-up', path: '/services#production' },
    { label: 'Shipping Coordination', path: '/services#shipping' },
  ],
  Company: [
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact Us', path: '/contact' },
  ],
  Products: [
    { label: 'Electronics', path: '/products#electronics' },
    { label: 'Furniture & Home', path: '/products#furniture' },
    { label: 'Clothing & Textiles', path: '/products#clothing' },
    { label: 'Machinery', path: '/products#machinery' },
    { label: 'All Categories', path: '/products' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-brand-blue rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <div className="leading-tight">
                <div className="text-white font-bold text-lg leading-none">SSourcing</div>
                <div className="text-brand-red text-xs font-semibold leading-none tracking-wide">CHINA</div>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-5 max-w-xs">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality from order to delivery.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-gold flex-shrink-0" />
                <span>Guangzhou, Guangdong, China</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span>+86 (0)20 1234 5678</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
          <div className="flex gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

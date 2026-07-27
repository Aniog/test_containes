import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const footerLinks = {
  Services: [
    { to: '/services', label: 'Supplier Sourcing' },
    { to: '/services', label: 'Factory Verification' },
    { to: '/services', label: 'Quality Control' },
    { to: '/services', label: 'Production Follow-up' },
    { to: '/services', label: 'Shipping Coordination' },
  ],
  'Quick Links': [
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/products', label: 'Products We Source' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact Us' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white rounded flex items-center justify-center">
                <span className="text-brand-navy font-bold text-sm">SC</span>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                SSourcing <span className="text-red-400">China</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers,
              verify factories, inspect quality, and coordinate shipping — all under one roof.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 hover:text-red-300 transition-colors"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" />
                <span>Room 1208, Block A, International Trade Center, Shenzhen, Guangdong, China</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-300">
                <Phone className="w-4 h-4 shrink-0 text-gray-400" />
                <span>+86 138 1234 5678</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-300">
                <Mail className="w-4 h-4 shrink-0 text-gray-400" />
                <span>info@ssourcingchina.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

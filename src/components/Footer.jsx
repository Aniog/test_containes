import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

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
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Products We Source', path: '/products' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact Us', path: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-lg leading-tight">SSourcing</span>
                <span className="text-brand-red text-xs font-semibold tracking-widest uppercase leading-tight">China</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Your trusted China-based sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality from order to delivery.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>Guangzhou, China (Operations)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4 text-brand-red flex-shrink-0" />
                <a href="mailto:info@ssourcing.cn" className="hover:text-white transition-colors">info@ssourcing.cn</a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>+86 (0) 20 0000 0000</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">{section}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Start Sourcing</h4>
            <p className="text-gray-400 text-sm mb-4">
              Tell us what you need. We'll respond within 24 hours with a tailored sourcing plan.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-brand-red hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-brand-blue rounded-md flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 text-gray-300" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-brand-blue rounded-md flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4 text-gray-300" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-brand-blue rounded-md flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4 text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-sm">© 2024 SSourcing China. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

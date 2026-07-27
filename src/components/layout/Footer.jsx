import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Linkedin, Twitter, Globe } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Supplier Sourcing', to: '/services' },
    { label: 'Factory Verification', to: '/services' },
    { label: 'Quality Inspection', to: '/services' },
    { label: 'Production Follow-up', to: '/services' },
    { label: 'Shipping Coordination', to: '/services' },
  ],
  Company: [
    { label: 'How It Works', to: '/how-it-works' },
    { label: 'Products We Source', to: '/products' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact Us', to: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gold-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-extrabold text-sm">S</span>
              </div>
              <div>
                <span className="text-white font-extrabold text-lg">SSourcing</span>
                <span className="text-gold-400 font-extrabold text-lg"> China</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Your trusted China-based sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality from order to delivery.
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Guangzhou & Yiwu, China</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href="mailto:info@ssourcing.cn" className="hover:text-white transition-colors">info@ssourcing.cn</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>+86 (0) 20 1234 5678</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">{section}</h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-gray-300 text-sm hover:text-gold-400 transition-colors"
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
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Start Sourcing</h4>
            <p className="text-gray-300 text-sm mb-4">
              Ready to source from China? Get a free consultation and quote within 24 hours.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gold-600 text-white px-5 py-3 rounded-lg font-semibold text-sm hover:bg-gold-700 transition-colors"
            >
              Get a Free Quote
            </Link>
            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 bg-navy-700 rounded-lg flex items-center justify-center hover:bg-gold-600 transition-colors">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="#" aria-label="Twitter" className="w-8 h-8 bg-navy-700 rounded-lg flex items-center justify-center hover:bg-gold-600 transition-colors">
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a href="#" aria-label="Website" className="w-8 h-8 bg-navy-700 rounded-lg flex items-center justify-center hover:bg-gold-600 transition-colors">
                <Globe className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-700">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-400">
            <a href="#" className="hover:text-gray-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-200 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

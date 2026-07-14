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

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-red-china rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-white text-base leading-none">SSourcing</span>
                <span className="text-xs text-gray-400 leading-none">China</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Professional China sourcing agent helping global buyers find reliable suppliers, verify factories, and manage quality from order to delivery.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-red-china flex-shrink-0" />
                <span>Guangzhou, China</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-red-china flex-shrink-0" />
                <a href="mailto:info@ssourcing.cn" className="hover:text-white transition-colors">
                  info@ssourcing.cn
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Globe className="w-4 h-4 text-red-china flex-shrink-0" />
                <span>Mon–Fri, 9:00–18:00 CST</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-400 text-sm hover:text-white transition-colors"
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
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Start Sourcing
            </h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Tell us what you need. We'll find the right supplier and manage the process end to end.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-red-china text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-red-china-dark transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            China Sourcing Agent | Supplier Verification | Quality Control | Shipping
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

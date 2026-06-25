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

const Footer = () => {
  return (
    <footer className="bg-[#0d2d52] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white rounded-md flex items-center justify-center">
                <span className="text-[#1a4f8a] font-bold text-sm">SS</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-white text-base leading-none">SSourcing</span>
                <span className="text-[#94a3b8] text-xs leading-none">China</span>
              </div>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">
              China-based sourcing agent helping global buyers find reliable suppliers, verify factories, and manage quality from order to delivery.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#94a3b8] text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 text-[#c0392b]" />
                <span>Guangzhou, China</span>
              </div>
              <div className="flex items-center gap-2 text-[#94a3b8] text-sm">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#c0392b]" />
                <a href="mailto:info@ssourcing.cn" className="hover:text-white transition-colors">info@ssourcing.cn</a>
              </div>
              <div className="flex items-center gap-2 text-[#94a3b8] text-sm">
                <Globe className="w-4 h-4 flex-shrink-0 text-[#c0392b]" />
                <span>English · Français · Español</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wide mb-4">{section}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-[#94a3b8] text-sm hover:text-white transition-colors"
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
            <h4 className="font-semibold text-white text-sm uppercase tracking-wide mb-4">Start Sourcing</h4>
            <p className="text-[#94a3b8] text-sm mb-4">
              Tell us what you need. We'll find the right suppliers and manage the process end-to-end.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#c0392b] hover:bg-[#a93226] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>

        <div className="border-t border-[#1e3a5f] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#64748b] text-sm">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p className="text-[#64748b] text-sm">
            China Sourcing Agent | Supplier Verification, QC & Shipping
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

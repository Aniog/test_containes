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
    <footer className="bg-[#1A3C6E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#1A3C6E] font-bold text-sm">SS</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-white text-base leading-none">SSourcing</span>
                <span className="text-[#D4A017] text-xs font-semibold leading-none">China</span>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-5">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality from order to delivery.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-200 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 text-[#D4A017]" />
                <span>Guangzhou, China</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#D4A017]" />
                <a href="mailto:info@ssourcing.cn" className="hover:text-white transition-colors">info@ssourcing.cn</a>
              </div>
              <div className="flex items-center gap-2 text-blue-200 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#D4A017]" />
                <span>+86 20 1234 5678</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{section}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-blue-200 hover:text-white text-sm transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Stay Updated</h4>
            <p className="text-blue-200 text-sm mb-4">Get sourcing tips and China market insights delivered to your inbox.</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-300 text-sm focus:outline-none focus:border-white/50 focus:bg-white/15"
              />
              <button
                type="submit"
                className="bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-4 py-2.5 rounded-lg text-sm transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-blue-300 text-sm">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

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
    <footer className="bg-[#1a2e4a] text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#e85d26] rounded flex items-center justify-center font-bold text-white text-sm">
                SS
              </div>
              <div>
                <span className="font-bold text-lg text-white block leading-none">SSourcing</span>
                <span className="text-blue-300 text-xs">China</span>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Your trusted China-based sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality from order to delivery.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-[#e85d26] rounded flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-[#e85d26] rounded flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-[#e85d26] rounded flex items-center justify-center transition-colors" aria-label="Website">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{title}</h4>
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

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#e85d26] mt-0.5 flex-shrink-0" />
                <span className="text-blue-200 text-sm">Guangzhou, Guangdong, China</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#e85d26] flex-shrink-0" />
                <a href="mailto:info@ssourcing.cn" className="text-blue-200 hover:text-white text-sm transition-colors">
                  info@ssourcing.cn
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#e85d26] flex-shrink-0" />
                <a href="tel:+8620123456789" className="text-blue-200 hover:text-white text-sm transition-colors">
                  +86 20 1234 5678
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-block bg-[#e85d26] hover:bg-[#c94d1e] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

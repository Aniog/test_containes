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
    <footer className="bg-brand-dark text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#1a4f8a] rounded-md flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-white">
                SSourcing<span className="text-[#c0392b]">China</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Professional China sourcing agent helping global buyers find reliable suppliers, verify factories, and manage quality from order to delivery.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center hover:bg-[#1a4f8a] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center hover:bg-[#1a4f8a] transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center hover:bg-[#1a4f8a] transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4">{title}</h4>
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

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Guangzhou, Guangdong, China</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-gray-400 text-sm hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <a href="tel:+8620123456789" className="text-gray-400 text-sm hover:text-white transition-colors">
                  +86 20 1234 5678
                </a>
              </li>
            </ul>
            <div className="mt-5 p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xs text-gray-400">Business Hours (CST)</p>
              <p className="text-sm text-white font-medium mt-1">Mon–Fri: 9:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

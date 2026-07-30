import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Supplier Sourcing', path: '/services' },
    { label: 'Factory Audit', path: '/services' },
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
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <span className="text-primary font-bold text-sm">SS</span>
              </div>
              <span className="font-bold text-xl">SSourcing China</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-5">
              Your trusted China-based sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality from order to delivery.
            </p>
            <div className="space-y-2 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 text-gold" />
                <span>Guangzhou, China (Operations)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-gold" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-gold" />
                <span>+86 (0) 20 0000 0000</span>
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
                      className="text-blue-200 text-sm hover:text-white transition-colors"
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
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Start Sourcing</h4>
            <p className="text-blue-200 text-sm mb-4">
              Tell us what you need. We'll find the right suppliers and manage the process for you.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-accent text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#a93226] transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>
            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 bg-blue-800 rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="w-8 h-8 bg-blue-800 rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="w-8 h-8 bg-blue-800 rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-blue-300">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

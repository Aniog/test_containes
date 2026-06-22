import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Linkedin, Twitter, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-lg leading-none">SSourcing</span>
                <span className="text-blue-300 text-xs leading-none">China</span>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Professional China sourcing agent helping global buyers find reliable suppliers, verify factories, and coordinate quality production.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-blue-800 rounded flex items-center justify-center hover:bg-brand-red transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-blue-800 rounded flex items-center justify-center hover:bg-brand-red transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-blue-800 rounded flex items-center justify-center hover:bg-brand-red transition-colors" aria-label="Website">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              {[
                ['Supplier Sourcing', '/services'],
                ['Factory Verification', '/services'],
                ['Quality Inspection', '/services'],
                ['Production Follow-up', '/services'],
                ['Shipping Coordination', '/services'],
                ['Private Label & OEM', '/services'],
              ].map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              {[
                ['How It Works', '/how-it-works'],
                ['Products We Source', '/products'],
                ['Case Studies', '/case-studies'],
                ['Blog', '/blog'],
                ['Contact Us', '/contact'],
              ].map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-blue-200">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-gold" />
                <span>Guangzhou, Guangdong, China</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-brand-gold" />
                <a href="mailto:info@ssourcing.cn" className="hover:text-white transition-colors">info@ssourcing.cn</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-brand-gold" />
                <span>+86 20 1234 5678</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-block bg-brand-red text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-blue-300">
          <p>© 2026 SSourcing China. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

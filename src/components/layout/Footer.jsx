import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Linkedin, Twitter, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-navy border border-brand-gold rounded-md flex items-center justify-center">
                <span className="text-brand-gold font-bold text-sm">SS</span>
              </div>
              <span className="font-bold text-white text-lg">SSourcing China</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Professional China sourcing agent helping global buyers find reliable suppliers, verify factories, and coordinate quality shipments.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-brand-blue rounded-md flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-brand-blue rounded-md flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-brand-blue rounded-md flex items-center justify-center transition-colors">
                <Globe className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                ['Supplier Sourcing', '/services'],
                ['Factory Verification', '/services'],
                ['Quality Inspection', '/services'],
                ['Production Follow-up', '/services'],
                ['Shipping Coordination', '/services'],
                ['Private Label Sourcing', '/services'],
              ].map(([label, path]) => (
                <li key={label}>
                  <Link to={path} className="text-gray-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                ['How It Works', '/how-it-works'],
                ['Products We Source', '/products'],
                ['Case Studies', '/case-studies'],
                ['Blog', '/blog'],
                ['Contact Us', '/contact'],
              ].map(([label, path]) => (
                <li key={label}>
                  <Link to={path} className="text-gray-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Guangzhou, Guangdong, China</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href="mailto:info@ssourcing.com" className="text-gray-400 hover:text-white transition-colors">
                  info@ssourcing.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href="tel:+8620XXXXXXXX" className="text-gray-400 hover:text-white transition-colors">
                  +86 20 XXXX XXXX
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <Link
                to="/contact"
                className="inline-block bg-brand-gold hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--primary)] text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                <span className="text-[var(--primary)] font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">SSourcing China</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Your trusted China sourcing agent. We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white text-sm">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white text-sm">Services</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-white text-sm">How It Works</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white text-sm">Products</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-white text-sm">Case Studies</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white text-sm">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white text-sm">Supplier Verification</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white text-sm">Factory Audit</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white text-sm">Quality Control</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white text-sm">Production Follow-up</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white text-sm">Shipping & Logistics</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white text-sm">Sourcing Consultation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-[var(--secondary)]" />
                <span className="text-gray-300 text-sm">
                  Room 501, Building A, Business Center<br />
                  Yiwu City, Zhejiang Province, China
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-[var(--secondary)]" />
                <a href="tel:+8657985278888" className="text-gray-300 hover:text-white text-sm">
                  +86 579 8527 8888
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-[var(--secondary)]" />
                <a href="mailto:info@ssourcing-china.com" className="text-gray-300 hover:text-white text-sm">
                  info@ssourcing-china.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} SSourcing China. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-dark)] text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[var(--secondary)] rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-semibold">SSourcing China</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted China sourcing agent. We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[var(--secondary)] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--secondary)] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--secondary)] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Supplier Verification</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Factory Audit</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Quality Inspection</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Production Follow-up</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Shipping & Logistics</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Sample Management</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[var(--secondary)] flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-400">
                  Shenzhen, Guangdong, China<br />
                  Serving clients worldwide
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[var(--secondary)] flex-shrink-0" size={20} />
                <a href="mailto:info@ssourcing-china.com" className="text-gray-400 hover:text-white transition-colors">
                  info@ssourcing-china.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[var(--secondary)] flex-shrink-0" size={20} />
                <a href="tel:+8675588888888" className="text-gray-400 hover:text-white transition-colors">
                  +86 755 8888 8888
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} SSourcing China. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-[#E67E22] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="ml-3 text-xl font-bold text-white">
                SSourcing<span className="text-[#E67E22]">China</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted China sourcing agent. We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate seamless shipping.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#E67E22] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E67E22] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E67E22] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#E67E22] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#E67E22] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-[#E67E22] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-[#E67E22] transition-colors">
                  Products We Source
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-400 hover:text-[#E67E22] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-[#E67E22] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#E67E22] transition-colors">
                  Supplier Verification
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#E67E22] transition-colors">
                  Factory Inspection
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#E67E22] transition-colors">
                  Quality Control
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#E67E22] transition-colors">
                  Production Follow-up
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#E67E22] transition-colors">
                  Shipping & Logistics
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#E67E22] transition-colors">
                  Sample Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[#E67E22] mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  Shenzhen, Guangdong, China<br />
                  Serving clients worldwide
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-[#E67E22] mr-3 flex-shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-gray-400 hover:text-[#E67E22] transition-colors">
                  info@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-[#E67E22] mr-3 flex-shrink-0" />
                <a href="tel:+8675581234567" className="text-gray-400 hover:text-[#E67E22] transition-colors">
                  +86 755 8123 4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} SSourcing China. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#E67E22] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E67E22] text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
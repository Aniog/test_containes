import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-lg font-bold tracking-tight">SSourcing China</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, 
              verify factories, and manage quality from production to delivery.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><Link to="/services" className="text-gray-300 text-sm hover:text-white transition no-underline">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="text-gray-300 text-sm hover:text-white transition no-underline">Factory Verification</Link></li>
              <li><Link to="/services" className="text-gray-300 text-sm hover:text-white transition no-underline">Quality Inspection</Link></li>
              <li><Link to="/services" className="text-gray-300 text-sm hover:text-white transition no-underline">Production Follow-up</Link></li>
              <li><Link to="/services" className="text-gray-300 text-sm hover:text-white transition no-underline">Shipping Coordination</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><Link to="/how-it-works" className="text-gray-300 text-sm hover:text-white transition no-underline">How It Works</Link></li>
              <li><Link to="/products" className="text-gray-300 text-sm hover:text-white transition no-underline">Products We Source</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 text-sm hover:text-white transition no-underline">Case Studies</Link></li>
              <li><Link to="/blog" className="text-gray-300 text-sm hover:text-white transition no-underline">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 text-sm hover:text-white transition no-underline">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+86 138 0000 0000</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Guangzhou, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 SSourcing China. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Helping global buyers source from China with confidence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

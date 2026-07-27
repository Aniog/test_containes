import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { navigation, services } from '@/lib/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E3A5F] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#1E3A5F] font-bold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">SSourcing</span>
                <span className="text-xs text-gray-300 leading-tight">China</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Professional China sourcing agent helping global buyers find reliable suppliers, verify factories, and ensure quality products.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-gray-300 hover:text-white text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <span className="text-gray-300 text-sm">{service.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Room 1208, Building A<br />Shenzhen, Guangdong<br />China 518000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a href="tel:+8675512345678" className="text-gray-300 text-sm hover:text-white">+86 755 1234 5678</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-gray-300 text-sm hover:text-white">info@ssourcingchina.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

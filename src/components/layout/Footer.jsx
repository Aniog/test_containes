import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { siteData } from '@/data/content';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-9 h-9 bg-accent-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-base">SS</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">SSourcing China</h3>
                <p className="text-gray-400 text-xs">Your Trusted Sourcing Partner</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Helping overseas buyers find reliable suppliers, verify factories, 
              inspect quality, and coordinate shipping from China since 2015.
            </p>
            <div className="space-y-3">
              <a href={`mailto:${siteData.company.email}`} className="flex items-center text-sm text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                {siteData.company.email}
              </a>
              <a href={`tel:${siteData.company.phone}`} className="flex items-center text-sm text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                {siteData.company.phone}
              </a>
              <div className="flex items-start text-sm text-gray-400">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                {siteData.company.address}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {['Supplier Verification', 'Quality Inspection', 'Production Follow-up', 'Shipping Coordination', 'Product Sourcing', 'Factory Audit'].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'How It Works', path: '/how-it-works' },
                { name: 'Products We Source', path: '/products' },
                { name: 'Case Studies', path: '/case-studies' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-white font-semibold mb-4">Ready to Source?</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get a free sourcing quote within 24 hours. Tell us what you need and our team will get back to you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-accent-orange text-white font-semibold rounded-lg hover:bg-accent-orange-hover transition-colors text-sm"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-gray-500 text-xs mb-2">WeChat</p>
              <p className="text-gray-400 text-sm">{siteData.company.wechat}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {currentYear} SSourcing China. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span>Guangzhou, China</span>
              <span>Serving 35+ Countries</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

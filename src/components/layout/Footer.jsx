import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Supplier Verification', path: '/services#verification' },
    { name: 'Factory Audit', path: '/services#audit' },
    { name: 'Quality Control', path: '/services#qc' },
    { name: 'Production Follow-up', path: '/services#production' },
    { name: 'Shipping & Logistics', path: '/services#shipping' },
    { name: 'Sourcing & Negotiation', path: '/services#sourcing' },
  ];

  const resources = [
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Products We Source', path: '/products' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/#faq' },
  ];

  const company = [
    { name: 'About Us', path: '/#about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];

  return (
    <footer className="bg-[#1A1A2E] text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white">
                S<span className="text-[#F5A623]">S</span>ourcing China
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Your trusted China sourcing agent. We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#F5A623] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F5A623] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F5A623] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-[#F5A623] text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.path}>
                  <Link
                    to={resource.path}
                    className="text-gray-400 hover:text-[#F5A623] text-sm transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#F5A623] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Shenzhen, Guangdong, China
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
                <a href="tel:+8675588888888" className="text-gray-400 hover:text-[#F5A623] text-sm">
                  +86 755 8888 8888
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
                <a href="mailto:info@ssourcing-china.com" className="text-gray-400 hover:text-[#F5A623] text-sm">
                  info@ssourcing-china.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} SSourcing China. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {company.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-400 hover:text-[#F5A623] text-sm transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
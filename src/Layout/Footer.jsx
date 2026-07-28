import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Supplier Verification', href: '/services#supplier-verification' },
    { name: 'Quality Inspection', href: '/services#quality-inspection' },
    { name: 'Production Follow-up', href: '/services#production-followup' },
    { name: 'Shipping Coordination', href: '/services#shipping' },
    { name: 'Sample Management', href: '/services#samples' },
    { name: 'Custom Solutions', href: '/services#custom' },
  ];

  const company = [
    { name: 'About Us', href: '/#about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const resources = [
    { name: 'FAQ', href: '/#faq' },
    { name: 'Sourcing Guide', href: '/blog/sourcing-guide' },
    { name: 'QC Checklist', href: '/blog/qc-checklist' },
    { name: 'Shipping Info', href: '/blog/shipping-info' },
  ];

  const products = [
    { name: 'Electronics & Components', href: '/products#electronics' },
    { name: 'Machinery & Equipment', href: '/products#machinery' },
    { name: 'Textiles & Apparel', href: '/products#textiles' },
    { name: 'Home & Garden', href: '/products#home' },
    { name: 'Packaging Materials', href: '/products#packaging' },
    { name: 'Industrial Parts', href: '/products#industrial' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">SSourcing</span>
                <span className="text-xl font-light text-blue-400">China</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted China sourcing partner. We help overseas buyers find reliable suppliers, 
              verify factories, inspect quality, and coordinate seamless shipping from China.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Shenzhen, China</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+86 755 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>info@ssourcingchina.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="hover:text-blue-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {products.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="hover:text-blue-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 mb-8">
              {company.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="hover:text-blue-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="hover:text-blue-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} SSourcing China. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Supplier Verification', path: '/services#verification' },
      { name: 'Quality Control Inspection', path: '/services#quality' },
      { name: 'Production Follow-up', path: '/services#production' },
      { name: 'Shipping & Logistics', path: '/services#shipping' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'How It Works', path: '/how-it-works' },
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Blog', path: '/blog' },
    ],
    resources: [
      { name: 'FAQ', path: '/#faq' },
      { name: 'Sourcing Guide', path: '/blog#guide' },
      { name: 'Quality Standards', path: '/blog#standards' },
      { name: 'Shipping Info', path: '/blog#shipping' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-blue-900 font-bold text-lg">S</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">SSourcing</span>
                <span className="text-xl font-light text-blue-400">China</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Your trusted China sourcing agent. We help overseas buyers find reliable 
              suppliers, verify factories, inspect quality, and coordinate seamless shipping.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                <span>Shenzhen, China</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <a href="tel:+8675588888888" className="hover:text-white transition-colors">
                  +86 755 8888 8888
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} SSourcing China. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
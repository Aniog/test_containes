import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const footerLinks = {
  services: {
    title: 'Services',
    links: [
      { name: 'Supplier Verification', path: '/services#supplier-verification' },
      { name: 'Quality Inspection', path: '/services#quality-inspection' },
      { name: 'Production Follow-up', path: '/services#production-followup' },
      { name: 'Shipping Coordination', path: '/services#shipping' },
      { name: 'All Services', path: '/services' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { name: 'About Us', path: '/about' },
      { name: 'How It Works', path: '/how-it-works' },
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { name: 'Products We Source', path: '/products' },
      { name: 'Sourcing Guide', path: '/blog#guide' },
      { name: 'FAQ', path: '/#faq' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Privacy Policy', path: '/privacy' },
    ],
  },
};

const Footer = () => {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#1e3a5f] font-bold text-xl">SS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight">SSourcing</span>
                <span className="text-[#94a3b8] text-xs leading-tight">China</span>
              </div>
            </Link>
            <p className="text-[#94a3b8] mb-6 max-w-sm">
              Your trusted China sourcing partner. We help overseas buyers find reliable suppliers, 
              verify factories, inspect quality, and coordinate shipping.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-[#94a3b8]">
                <Mail className="w-5 h-5 mr-3" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </div>
              <div className="flex items-center text-[#94a3b8]">
                <Phone className="w-5 h-5 mr-3" />
                <a href="tel:+862112345678" className="hover:text-white transition-colors">
                  +86 21 1234 5678
                </a>
              </div>
              <div className="flex items-start text-[#94a3b8]">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>Shanghai, China</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#2d4a6f] rounded-lg flex items-center justify-center hover:bg-[#3d5a7f] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#2d4a6f] rounded-lg flex items-center justify-center hover:bg-[#3d5a7f] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#2d4a6f] rounded-lg flex items-center justify-center hover:bg-[#3d5a7f] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Link Sections */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-[#94a3b8] hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="py-6 border-t border-[#2d4a6f]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#94a3b8] text-sm">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/terms" className="text-[#94a3b8] hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-[#94a3b8] hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

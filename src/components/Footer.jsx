import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1a202c] text-[#a0aec0] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="font-semibold text-white text-lg mb-4">SSourcing China</div>
            <p className="text-sm">Professional China sourcing services for international buyers.</p>
          </div>
          <div>
            <div className="font-semibold text-white mb-4">Company</div>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/services" className="hover:text-white">Services</Link>
              <Link to="/how-it-works" className="hover:text-white">How It Works</Link>
              <Link to="/case-studies" className="hover:text-white">Case Studies</Link>
            </div>
          </div>
          <div>
            <div className="font-semibold text-white mb-4">Resources</div>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/products" className="hover:text-white">Products</Link>
              <Link to="/blog" className="hover:text-white">Blog</Link>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>
          <div>
            <div className="font-semibold text-white mb-4">Contact</div>
            <div className="text-sm space-y-1">
              <p>Shanghai, China</p>
              <p>info@ssourcingchina.com</p>
              <p>+86 21 1234 5678</p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-[#2d3748] text-sm text-center">
          © {new Date().getFullYear()} SSourcing China. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

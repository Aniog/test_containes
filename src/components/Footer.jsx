import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="font-semibold text-white text-lg">SSourcing China</span>
            </div>
            <p className="text-sm">
              Professional sourcing services connecting global buyers with verified Chinese manufacturers.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products">Products We Source</Link></li>
              <li><Link to="/contact">Request a Quote</Link></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Shanghai, China</li>
              <li><a href="mailto:info@ssourcingchina.com">info@ssourcingchina.com</a></li>
              <li><a href="tel:+862162345678">+86 21 6234 5678</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 text-sm flex flex-col md:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <p className="text-xs">Professional sourcing services for international buyers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

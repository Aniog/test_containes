import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer pt-12 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-700">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-slate-900 font-bold text-lg">SS</span>
              </div>
              <span className="font-semibold text-xl text-white">SSourcing China</span>
            </div>
            <p className="text-sm text-slate-400">
              Professional sourcing services connecting global buyers with reliable Chinese suppliers.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products">Products We Source</Link></li>
              <li><Link to="/contact">Request a Quote</Link></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Shanghai, China</li>
              <li><a href="mailto:info@ssourcingchina.com">info@ssourcingchina.com</a></li>
              <li><a href="tel:+862150000000">+86 21 5000 0000</a></li>
            </ul>
            <div className="mt-4">
              <Link to="/contact" className="btn btn-primary text-sm">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} SSourcing China. All rights reserved.</p>
          <p className="text-center">Professional sourcing services for international buyers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

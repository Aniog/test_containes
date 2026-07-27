import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-slate-900 font-bold text-sm">
                SS
              </div>
              <span className="text-lg font-semibold text-white">
                SSourcing China
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Your trusted China-based sourcing agent. We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping from China.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm">
                <Mail className="mr-2 h-4 w-4" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white">
                  info@ssourcingchina.com
                </a>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="mr-2 h-4 w-4" />
                <a href="tel:+8613800000000" className="hover:text-white">
                  +86 138 0000 0000
                </a>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="mr-2 h-4 w-4" />
                <span>Shenzhen, China</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm hover:text-white">
                  Supplier Finding
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-white">
                  Factory Verification
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-white">
                  Quality Inspection
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-white">
                  Production Monitoring
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-white">
                  Shipping Coordination
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/how-it-works" className="text-sm hover:text-white">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center text-sm text-slate-400">
            <Globe className="mr-1.5 h-4 w-4" />
            <span>Serving buyers worldwide from China</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white tracking-tight">SSourcing<span className="text-sky-500">China</span></span>
            </Link>
            <p className="text-slate-400 text-base max-w-xs">
              Your reliable partner in China. We help global buyers source quality products, verify suppliers, and manage shipping with zero hassle.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-sky-500 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-sky-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-sky-500 transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Solutions</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link to="/services" className="text-base text-slate-400 hover:text-white transition-colors">
                      Supplier Verification
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-base text-slate-400 hover:text-white transition-colors">
                      Product Sourcing
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-base text-slate-400 hover:text-white transition-colors">
                      Quality Inspection
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-base text-slate-400 hover:text-white transition-colors">
                      Shipping & Logistics
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link to="/how-it-works" className="text-base text-slate-400 hover:text-white transition-colors">
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link to="/case-studies" className="text-base text-slate-400 hover:text-white transition-colors">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="text-base text-slate-400 hover:text-white transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-base text-slate-400 hover:text-white transition-colors">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Contact</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li className="flex gap-3 text-slate-400">
                    <Mail className="h-5 w-5 flex-shrink-0 text-sky-500" />
                    <span className="text-base">inquiry@ssourcingchina.com</span>
                  </li>
                  <li className="flex gap-3 text-slate-400">
                    <Phone className="h-5 w-5 flex-shrink-0 text-sky-500" />
                    <span className="text-base">+86 138 XXXX XXXX</span>
                  </li>
                  <li className="flex gap-3 text-slate-400">
                    <MapPin className="h-5 w-5 flex-shrink-0 text-sky-500" />
                    <span className="text-base">Guangzhou, Guangdong, China</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-base text-slate-400 xl:text-center">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
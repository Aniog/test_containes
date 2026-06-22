import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2">
               <span className="text-2xl font-bold text-white tracking-tight">SSourcing<span className="text-blue-400">China</span></span>
            </Link>
            <p className="text-sm leading-6 text-slate-300 max-w-sm">
              Your trusted China sourcing agent for global buyers. We help you find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link to="/services#supplier-sourcing" className="text-sm leading-6 text-slate-400 hover:text-white">Supplier Sourcing</Link></li>
                  <li><Link to="/services#factory-verification" className="text-sm leading-6 text-slate-400 hover:text-white">Factory Verification</Link></li>
                  <li><Link to="/services#quality-inspection" className="text-sm leading-6 text-slate-400 hover:text-white">Quality Inspection (QC)</Link></li>
                  <li><Link to="/services#logistics" className="text-sm leading-6 text-slate-400 hover:text-white">Shipping & Logistics</Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link to="/how-it-works" className="text-sm leading-6 text-slate-400 hover:text-white">How It Works</Link></li>
                  <li><Link to="/case-studies" className="text-sm leading-6 text-slate-400 hover:text-white">Case Studies</Link></li>
                  <li><Link to="/blog" className="text-sm leading-6 text-slate-400 hover:text-white">Blog</Link></li>
                  <li><Link to="/contact" className="text-sm leading-6 text-slate-400 hover:text-white">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link to="/products" className="text-sm leading-6 text-slate-400 hover:text-white">Products We Source</Link></li>
                  <li><Link to="/faq" className="text-sm leading-6 text-slate-400 hover:text-white">FAQ</Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                <ul role="list" className="mt-6 space-y-4 text-sm leading-6 text-slate-400">
                  <li>Guangzhou, China</li>
                  <li>info@ssourcingchina.com</li>
                  <li>+86 XXX XXXX XXXX</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-slate-800 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-slate-400">&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
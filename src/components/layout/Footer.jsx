import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
                <span className="text-sm font-bold tracking-tight">AM</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-semibold tracking-tight text-slate-900">
                  ARTITECT MACHINERY
                </span>
                <span className="text-xs text-slate-500">Precision Folding Solutions</span>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
              Engineering excellence in sheet metal folding machinery. We design and manufacture
              high-precision double folding machines for industrial applications worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="text-sm text-slate-600 hover:text-slate-900">Home</a>
              </li>
              <li>
                <a href="/products" className="text-sm text-slate-600 hover:text-slate-900">Products</a>
              </li>
              <li>
                <a href="/about" className="text-sm text-slate-600 hover:text-slate-900">About Us</a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-slate-600 hover:text-slate-900">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-slate-600">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-600">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <span>info@artitect-machinery.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-600">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <span>Industrial Park, Manufacturing District</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="text-center text-xs text-slate-500">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

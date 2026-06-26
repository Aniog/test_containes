import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { COMPANY_NAME, NAVIGATION, CONTACT_PHONE, CONTACT_EMAIL } from '@/lib/config';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="bg-brand-blue text-white py-2 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Phone size={14} /> {CONTACT_PHONE}</span>
            <span className="flex items-center gap-1"><Mail size={14} /> {CONTACT_EMAIL}</span>
          </div>
          <div>Experienced Sourcing Team Based in Shenzhen</div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-brand-blue tracking-tight">
              {COMPANY_NAME}
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-blue",
                  location.pathname === item.href ? "text-brand-blue" : "text-slate-600"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-brand-orange text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-orange-600 transition-colors shadow-sm"
            >
              Get a Free Quote
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-blue"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top duration-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-md"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-brand-orange text-white px-4 py-3 rounded-md text-base font-semibold shadow-sm"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

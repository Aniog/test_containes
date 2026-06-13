import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy-dark border-t border-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 border-2 border-gold rounded-lg flex items-center justify-center">
                <span className="text-gold font-bold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg tracking-wide leading-tight">
                  ARTITECT
                </span>
                <span className="text-gold text-[10px] font-semibold tracking-[0.3em] uppercase leading-tight">
                  Machinery
                </span>
              </div>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Precision metal folding solutions for manufacturers worldwide.
              Engineering excellence since 1998.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {[
                'Double Folding Machine',
                'Double Folder',
                'Sheet Metal Folder',
                'Sheet Metal Folding Machine',
                'Metal Folder',
                'Metal Folding Machine',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#products"
                    className="text-gray-400 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Features', href: '#features' },
                { label: 'Contact', href: '#contact' },
                { label: 'Careers', href: '#' },
                { label: 'News & Updates', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {[
                'Technical Documentation',
                'Spare Parts',
                'Training Programs',
                'Warranty Information',
                'Service Request',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-light py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-500 hover:text-gold text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gold text-sm transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

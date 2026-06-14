import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-white rounded flex items-center justify-center">
                <span className="text-slate-900 font-bold text-lg tracking-tighter">AM</span>
              </div>
              <div>
                <div className="font-semibold text-xl tracking-tight text-white">ARTITECT</div>
                <div className="text-[10px] text-slate-500 -mt-1 tracking-[3px]">MACHINERY</div>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed">
              Precision-engineered sheet metal folding solutions for manufacturers who demand excellence.
              Trusted worldwide since 1987.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-semibold text-white mb-4 text-sm tracking-wider">QUICK LINKS</div>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#about" className="hover:text-white transition-colors">About Us</a>
              <a href="#products" className="hover:text-white transition-colors">Our Products</a>
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div className="font-semibold text-white mb-4 text-sm tracking-wider">CONTACT</div>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:+18005551234" className="hover:text-white transition-colors">+1 (800) 555-1234</a>
              <a href="mailto:info@artitectmachinery.com" className="hover:text-white transition-colors">info@artitectmachinery.com</a>
              <div className="pt-2">
                1240 Industrial Parkway<br />
                Cleveland, OH 44114<br />
                United States
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div>© {new Date().getFullYear()} Artitect Machinery. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Warranty</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

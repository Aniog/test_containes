import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded bg-white flex items-center justify-center">
                <span className="text-slate-900 font-semibold text-xl tracking-[-1px]">A</span>
              </div>
              <div>
                <div className="font-semibold text-xl tracking-[-0.5px] text-white">ARTITECT</div>
                <div className="text-[10px] text-slate-500 -mt-1 tracking-[2px]">MACHINERY</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-6">
              Precision-engineered metal folding solutions for manufacturers who demand excellence.
              Trusted worldwide since 1987.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:+18005551234" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                1-800-555-1234
              </a>
              <a href="mailto:sales@artitectmachinery.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                sales@artitectmachinery.com
              </a>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>1240 Industrial Parkway<br />Cleveland, OH 44114, USA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <div className="font-medium text-white mb-4 text-sm tracking-wider">EXPLORE</div>
            <div className="flex flex-col gap-3 text-sm">
              <button onClick={() => scrollToSection('#about')} className="text-left hover:text-white transition-colors">About Us</button>
              <button onClick={() => scrollToSection('#products')} className="text-left hover:text-white transition-colors">Our Products</button>
              <button onClick={() => scrollToSection('#features')} className="text-left hover:text-white transition-colors">Features & Benefits</button>
              <button onClick={() => scrollToSection('#contact')} className="text-left hover:text-white transition-colors">Contact Sales</button>
            </div>
          </div>

          {/* Products */}
          <div className="md:col-span-4">
            <div className="font-medium text-white mb-4 text-sm tracking-wider">PRODUCTS</div>
            <div className="grid grid-cols-1 gap-y-2 text-sm">
              <div>Double Folding Machines</div>
              <div>Sheet Metal Folders</div>
              <div>Precision Metal Folders</div>
              <div>Heavy-Duty Folding Systems</div>
              <div>Custom Fabrication Equipment</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div>© {currentYear} Artitect Machinery. All rights reserved.</div>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Warranty</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

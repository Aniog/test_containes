import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#1a1f2e] text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-white/10 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg tracking-tighter">AM</span>
              </div>
              <div>
                <div className="font-semibold text-xl tracking-tight text-white">ARTITECT</div>
                <div className="text-[10px] text-white/50 -mt-1 tracking-[3px]">MACHINERY</div>
              </div>
            </div>
            <p className="text-sm max-w-sm text-white/60 leading-relaxed">
              Precision-engineered sheet metal folding solutions for manufacturers who demand excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-medium text-white text-sm tracking-widest mb-4">EXPLORE</div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#products" onClick={(e) => scrollToSection(e, '#products')} className="hover:text-white transition-colors">Our Products</a>
              </li>
              <li>
                <a href="#features" onClick={(e) => scrollToSection(e, '#features')} className="hover:text-white transition-colors">Why ARTITECT</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-medium text-white text-sm tracking-widest mb-4">CONTACT</div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-white transition-colors">Request a Quote</a>
              </li>
              <li className="text-white/50">sales@artitectmachinery.com</li>
              <li className="text-white/50">+1 (800) 555-0199</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <div>© {currentYear} ARTITECT MACHINERY. All rights reserved.</div>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

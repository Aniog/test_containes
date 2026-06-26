import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0A1628] text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-x-8 gap-y-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-white/10 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg tracking-tighter">AM</span>
              </div>
              <div>
                <div className="font-semibold text-lg tracking-tight text-white">ARTITECT</div>
                <div className="text-[10px] text-white/40 -mt-1 tracking-[2px]">MACHINERY</div>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Precision folding equipment since 1987.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-medium text-white mb-4 text-sm tracking-wider">NAVIGATION</div>
            <div className="space-y-2.5 text-sm">
              <button onClick={() => scrollToSection('#about')} className="block hover:text-white transition-colors">About Us</button>
              <button onClick={() => scrollToSection('#products')} className="block hover:text-white transition-colors">Products</button>
              <button onClick={() => scrollToSection('#features')} className="block hover:text-white transition-colors">Features</button>
              <button onClick={() => scrollToSection('#contact')} className="block hover:text-white transition-colors">Contact</button>
            </div>
          </div>

          {/* Products */}
          <div>
            <div className="font-medium text-white mb-4 text-sm tracking-wider">PRODUCTS</div>
            <div className="space-y-2.5 text-sm">
              <button onClick={() => scrollToSection('#products')} className="block hover:text-white transition-colors">Double Folders</button>
              <button onClick={() => scrollToSection('#products')} className="block hover:text-white transition-colors">Sheet Metal Folders</button>
              <button onClick={() => scrollToSection('#products')} className="block hover:text-white transition-colors">Heavy-Duty Folders</button>
              <button onClick={() => scrollToSection('#products')} className="block hover:text-white transition-colors">Compact Models</button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="font-medium text-white mb-4 text-sm tracking-wider">HEADQUARTERS</div>
            <div className="space-y-2 text-sm">
              <div>Industriestraße 42</div>
              <div>42897 Remscheid, Germany</div>
              <div className="pt-2">
                <a href="tel:+492191567890" className="hover:text-white transition-colors block">+49 2191 567 890</a>
                <a href="mailto:sales@artitect-machinery.com" className="hover:text-white transition-colors block">sales@artitect-machinery.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <div>© {currentYear} ARTITECT MACHINERY GmbH. All rights reserved.</div>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Legal Notice</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

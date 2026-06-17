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
    <footer className="bg-[#1a252f] text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-y-12 gap-x-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-white rounded flex items-center justify-center">
                <span className="text-[#1a252f] font-bold text-lg tracking-tighter">AM</span>
              </div>
              <div>
                <div className="font-semibold text-white text-lg tracking-tight">ARTITECT</div>
                <div className="text-[10px] text-white/50 -mt-1 tracking-[2px]">MACHINERY</div>
              </div>
            </div>
            <p className="text-sm text-white/60 pr-4">
              Precision folding machines since 1987.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-medium text-white text-sm tracking-widest mb-4">EXPLORE</div>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#products" onClick={(e) => scrollToSection(e, '#products')} className="hover:text-white transition-colors cursor-pointer">Our Machines</a></li>
              <li><a href="#features" onClick={(e) => scrollToSection(e, '#features')} className="hover:text-white transition-colors cursor-pointer">Why Artitect</a></li>
              <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-white transition-colors cursor-pointer">Our Story</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-white transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <div className="font-medium text-white text-sm tracking-widest mb-4">PRODUCTS</div>
            <ul className="space-y-2.5 text-sm">
              <li>Double Folding Machines</li>
              <li>Sheet Metal Folders</li>
              <li>Metal Folding Machines</li>
              <li>Custom Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-medium text-white text-sm tracking-widest mb-4">HEADQUARTERS</div>
            <div className="text-sm space-y-1 text-white/70">
              <p>Industriestraße 42</p>
              <p>D-42897 Remscheid</p>
              <p>Germany</p>
              <p className="pt-2">
                <a href="tel:+492191567890" className="hover:text-white transition-colors">+49 2191 567 890</a>
              </p>
              <p>
                <a href="mailto:sales@artitect-machinery.com" className="hover:text-white transition-colors">sales@artitect-machinery.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <div>© {currentYear} Artitect Machinery GmbH. All rights reserved.</div>
          <div className="flex gap-6">
            <span className="hover:text-white/70 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white/70 cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white/70 cursor-pointer transition-colors">Legal Notice</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

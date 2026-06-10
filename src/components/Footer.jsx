import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Features', href: '#features' },
    { label: 'Why ARTITECT', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
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
    <footer className="bg-slate-950 text-white/70 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-white rounded flex items-center justify-center">
                <span className="text-slate-950 font-bold text-lg tracking-tighter">AM</span>
              </div>
              <div>
                <div className="font-semibold text-lg tracking-tight text-white">ARTITECT</div>
                <div className="text-[9px] text-white/40 -mt-1 tracking-[2.5px]">MACHINERY</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed pr-4">
              Precision sheet metal folding machines since 1998. Built for fabricators who demand the best.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-semibold text-white text-sm tracking-widest mb-4">EXPLORE</div>
            <ul className="space-y-2.5 text-sm">
              {links.map((link, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-semibold text-white text-sm tracking-widest mb-4">CONTACT</div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="tel:+18005551234" className="hover:text-white transition-colors">1-800-555-1234</a>
              </li>
              <li>
                <a href="mailto:sales@artitectmachinery.com" className="hover:text-white transition-colors">sales@artitectmachinery.com</a>
              </li>
              <li className="pt-1">
                1240 Industrial Parkway<br />
                Cleveland, OH 44114
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <div className="font-semibold text-white text-sm tracking-widest mb-4">SUPPORT</div>
            <ul className="space-y-2.5 text-sm">
              <li>24/7 Technical Hotline</li>
              <li>Spare Parts Portal</li>
              <li>Training & Certification</li>
              <li>Documentation Center</li>
              <li className="pt-1">Service in 40+ Countries</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs tracking-wide">
          <div>© {currentYear} ARTITECT MACHINERY. All rights reserved.</div>
          <div className="flex gap-x-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Warranty</span>
          </div>
          <div className="text-white/40">ISO 9001:2015 • CE Certified</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

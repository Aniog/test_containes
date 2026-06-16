import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2d3748] text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#d4a574] rounded-lg flex items-center justify-center">
                <span className="text-[#1a2744] font-bold text-lg">A</span>
              </div>
              <div>
                <span className="font-display text-xl font-bold tracking-wide">ARTITECT</span>
                <span className="block text-[10px] tracking-[0.3em] text-white/60 -mt-1">MACHINERY</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Premium metal folding solutions engineered for precision, durability, and excellence. 
              Your trusted partner in sheet metal processing equipment.
            </p>
            <div className="flex gap-4">
              {['linkedin', 'twitter', 'facebook'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#d4a574] transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs uppercase font-bold text-white/80">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Products', 'Features', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => scrollToSection(e, link.toLowerCase())}
                    className="text-white/60 hover:text-[#d4a574] transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-white mb-6">Products</h4>
            <ul className="space-y-3">
              {[
                'Double Folder Machine',
                'Sheet Metal Folder',
                'Metal Folding Machine',
                'CNC Folder',
                'Portable Folder',
              ].map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    onClick={(e) => scrollToSection(e, 'products')}
                    className="text-white/60 hover:text-[#d4a574] transition-colors text-sm"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d4a574] flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  1234 Industrial Park Drive<br />
                  Manufacturing City, MC 56789
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#d4a574] flex-shrink-0" />
                <a href="tel:+15551234567" className="text-white/60 hover:text-[#d4a574] transition-colors text-sm">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#d4a574] flex-shrink-0" />
                <a href="mailto:info@artitectmachinery.com" className="text-white/60 hover:text-[#d4a574] transition-colors text-sm">
                  info@artitectmachinery.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {currentYear} ARTITECT MACHINERY. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/40 hover:text-[#d4a574] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-white/40 hover:text-[#d4a574] transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

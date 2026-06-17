import { Factory, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a2744] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <Factory className="w-8 h-8 text-[#e85d04]" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight leading-none">
                  ARTITECT
                </span>
                <span className="text-xs font-medium tracking-widest text-gray-400">
                  MACHINERY
                </span>
              </div>
            </a>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Precision-engineered sheet metal folding solutions for modern manufacturing. 
              Building the future of metal fabrication with innovation and reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Products', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-[#e85d04] transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#e85d04] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Industrial Park Drive<br />
                  Manufacturing District, ST 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#e85d04] flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-[#e85d04] transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#e85d04] flex-shrink-0" />
                <a href="mailto:info@artitectmachinery.com" className="text-gray-400 hover:text-[#e85d04] transition-colors">
                  info@artitectmachinery.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

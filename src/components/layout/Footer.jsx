import { Mail, Phone, MapPin, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D1B2A] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <span
                className="text-2xl font-bold tracking-widest text-[#C8922A] block"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                ARTITECT
              </span>
              <span className="text-xs tracking-[0.3em] text-white/50 font-inter font-light uppercase">
                Machinery
              </span>
            </div>
            <p className="text-white/60 text-sm font-inter leading-relaxed max-w-xs">
              Engineering precision sheet metal folding machines trusted by manufacturers worldwide. Quality, reliability, and innovation in every fold.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/40 hover:text-[#C8922A] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-[#C8922A] transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5 font-inter">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['#products', '#features', '#about', '#contact'].map((href) => (
                <li key={href}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className="text-white/50 hover:text-[#C8922A] transition-colors text-sm font-inter capitalize"
                  >
                    {href.replace('#', '')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5 font-inter">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/50 text-sm font-inter">
                <Phone className="w-4 h-4 text-[#C8922A] mt-0.5 shrink-0" />
                <span>+1 (800) 278-4832</span>
              </li>
              <li className="flex items-start gap-3 text-white/50 text-sm font-inter">
                <Mail className="w-4 h-4 text-[#C8922A] mt-0.5 shrink-0" />
                <span>info@artitectmachinery.com</span>
              </li>
              <li className="flex items-start gap-3 text-white/50 text-sm font-inter">
                <MapPin className="w-4 h-4 text-[#C8922A] mt-0.5 shrink-0" />
                <span>Industrial Park, Suite 400<br />Detroit, MI 48201</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs font-inter">
            © 2026 Artitect Machinery. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-inter">
            Precision Engineered. Perfectly Formed.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

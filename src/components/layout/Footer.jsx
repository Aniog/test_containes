import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'];
const helpLinks = ['Shipping & Returns', 'Size Guide', 'Jewelry Care', 'FAQ', 'Contact Us'];
const companyLinks = ['Our Story', 'Sustainability', 'Journal', 'Careers', 'Stockists'];

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-white">
      <div className="section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8">

          {/* Logo + social */}
          <div className="md:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.25em] text-velmora-gold">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. 18K gold-plated pieces designed for the woman who knows that true luxury is quiet.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/40 hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/40 hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/40 hover:text-velmora-gold transition-colors" aria-label="Pinterest">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.36-.72-.36-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.993 3.994-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.25 3.772-5.496 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.56-5.418 5.207 0 1.031.397 2.137.893 2.739a.36.36 0 01.083.345c-.09.375-.29 1.194-.33 1.361-.052.217-.172.263-.397.158-1.481-.689-2.408-2.855-2.408-4.594 0-3.74 2.717-7.175 7.835-7.175 4.113 0 7.309 2.93 7.309 6.847 0 4.085-2.576 7.374-6.152 7.374-1.201 0-2.331-.624-2.718-1.361 0 0-.595 2.266-.74 2.822-.268 1.033-.992 2.327-1.476 3.117A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-white/60 mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {shopLinks.map(link => (
                <li key={link}>
                  <Link to="/shop" className="text-sm text-white/40 hover:text-velmora-gold transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-white/60 mb-4">Help</h4>
            <ul className="space-y-2.5">
              {helpLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/40 hover:text-velmora-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-white/60 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/40 hover:text-velmora-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-4 text-[10px] tracking-widest uppercase text-white/30">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

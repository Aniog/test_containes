import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'],
  Help: ['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQ', 'Contact'],
  Company: ['Our Story', 'Sustainability', 'Press', 'Careers', 'Terms & Privacy'],
};

export function Footer() {
  return (
    <footer className="bg-velmora-text text-velmora-bg">
      <div className="px-5 md:px-8 lg:px-12 xl:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl uppercase tracking-[0.25em]">
              Velmora
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-velmora-sand">
              Demi-fine jewelry designed to be treasured. Crafted in 18K gold-plated
              finishes, made for everyday rituals and lifelong keepsakes.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" className="text-velmora-sand hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-velmora-sand hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-velmora-sand hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-sans text-xs uppercase tracking-widest text-white mb-5">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-sm text-velmora-sand hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-sand">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-velmora-sand">
            <span className="px-2 py-1 border border-white/20 rounded">Visa</span>
            <span className="px-2 py-1 border border-white/20 rounded">Mastercard</span>
            <span className="px-2 py-1 border border-white/20 rounded">Amex</span>
            <span className="px-2 py-1 border border-white/20 rounded">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

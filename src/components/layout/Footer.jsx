import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  Shop: ['New Arrivals', 'Bestsellers', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  Help: ['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQ', 'Contact Us'],
  Company: ['Our Story', 'Sustainability', 'Press', 'Careers', 'Affiliates'],
};

const Footer = () => {
  return (
    <footer className="bg-velmora-espresso text-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.15em] text-velmora-cream inline-block mb-4"
            >
              VELMORA
            </Link>
            <p className="text-sm text-velmora-sand/80 leading-relaxed max-w-sm mb-6">
              Demi-fine jewelry designed for everyday luxury. Crafted in small
              batches, made to be treasured.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-velmora-taupe/30 rounded-full hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-velmora-taupe/30 rounded-full hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-velmora-taupe/30 rounded-full hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-velmora-cream mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-sm text-velmora-sand/70 hover:text-velmora-gold transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline bg-velmora-taupe/20 my-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-sand/60">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-velmora-sand/60 uppercase tracking-wider">
              We accept
            </span>
            <div className="flex items-center gap-2">
              {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((method) => (
                <span
                  key={method}
                  className="px-2 py-1 border border-velmora-taupe/30 text-[10px] uppercase tracking-wider text-velmora-sand/80"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

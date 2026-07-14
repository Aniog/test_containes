import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = {
  Shop: [
    { label: 'All Jewelry', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop?category=sets' },
  ],
  Help: [
    { label: 'Shipping & Returns', to: '/shipping' },
    { label: 'Size Guide', to: '/size-guide' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact Us', to: '/contact' },
    { label: 'Track Order', to: '/track' },
  ],
  Company: [
    { label: 'Our Story', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Sustainability', to: '/sustainability' },
    { label: 'Press', to: '/press' },
    { label: 'Careers', to: '/careers' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-velmora-text-light">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        {/* Main footer content */}
        <div className="py-14 md:py-18 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-4">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-velmora-cream">
              VELMORA
            </Link>
            <p className="text-sm text-velmora-muted mt-4 max-w-xs leading-relaxed">
              Crafted to be treasured. Fine demi-fine jewelry designed for the modern woman who values quiet luxury and timeless quality.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok', 'Facebook'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-velmora-muted hover:text-velmora-gold transition-colors text-xs uppercase tracking-wider"
                  aria-label={social}
                >
                  {social === 'TikTok' ? 'TikTok' : social[0] + social.slice(1, 2).toLowerCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="md:col-span-2">
              <h3 className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-velmora-cream mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Payment icons column */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-velmora-cream mb-4">
              We Accept
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal', 'Apple'].map((card) => (
                <div
                  key={card}
                  className="bg-velmora-charcoal-light border border-velmora-divider-dark rounded px-2.5 py-1.5 text-[10px] text-velmora-muted font-sans"
                >
                  {card}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-velmora-divider-dark py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-velmora-muted">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((link) => (
              <a key={link} href="#" className="text-xs text-velmora-muted hover:text-velmora-gold transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const shopLinks = [
    { to: '/shop?category=earrings', label: 'Earrings' },
    { to: '/shop?category=necklaces', label: 'Necklaces' },
    { to: '/shop?category=huggies', label: 'Huggies' },
    { to: '/shop', label: 'All Jewelry' },
  ];

  const helpLinks = [
    { to: '#', label: 'Shipping & Returns' },
    { to: '#', label: 'FAQ' },
    { to: '#', label: 'Size Guide' },
    { to: '#', label: 'Contact Us' },
  ];

  const companyLinks = [
    { to: '/about', label: 'Our Story' },
    { to: '/journal', label: 'Journal' },
    { to: '#', label: 'Sustainability' },
    { to: '#', label: 'Press' },
  ];

  const paymentIcons = ['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'];

  return (
    <footer className="bg-brand-charcoal text-brand-cream">
      {/* Newsletter */}
      <div className="border-b border-brand-mid-brown/40">
        <div className="section-padding py-14 lg:py-20">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-serif text-3xl lg:text-4xl mb-3 text-brand-cream">
              Join for 10% Off Your First Order
            </h2>
            <p className="text-sm text-brand-warmgray mb-8 tracking-wide">
              Be the first to discover new arrivals, exclusive offers, and style inspiration.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={e => { e.preventDefault(); }}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3 bg-brand-dark-brown border border-brand-mid-brown/60 text-brand-cream placeholder:text-brand-soft-brown text-sm tracking-wide focus:outline-none focus:border-brand-gold transition-colors"
                required
              />
              <button type="submit" className="btn-gold whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer columns */}
      <div className="section-padding py-14 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-light tracking-[0.2em] text-brand-cream">
              VELMORA
            </Link>
            <p className="text-sm text-brand-warmgray mt-4 leading-relaxed max-w-[240px]">
              Crafted to be treasured. Demi-fine gold jewelry for the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-brand-warmgray hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-brand-warmgray hover:text-brand-gold transition-colors" aria-label="Facebook">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-brand-warmgray hover:text-brand-gold transition-colors" aria-label="Twitter">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-warmgray mb-5">
              Shop
            </h3>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-brand-warmgray hover:text-brand-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-warmgray mb-5">
              Help
            </h3>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-brand-warmgray hover:text-brand-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-warmgray mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-brand-warmgray hover:text-brand-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-mid-brown/40">
        <div className="section-padding py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-soft-brown">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {paymentIcons.map(icon => (
              <span
                key={icon}
                className="text-[10px] text-brand-soft-brown border border-brand-mid-brown/40 px-2 py-1 tracking-wide"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

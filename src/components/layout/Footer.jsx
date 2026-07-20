import { Link } from 'react-router-dom';
import { Camera, MessageCircle, Heart } from 'lucide-react';
import { footerLinks } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/80">
      {/* Newsletter */}
      <div className="border-b border-cream/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-2xl md:text-3xl text-cream mb-3">
              Join for 10% off your first order
            </h3>
            <p className="text-cream/60 text-sm mb-8">
              Sign up for early access to new collections, exclusive offers, and styling inspiration.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button type="submit" className="btn-gold whitespace-nowrap">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.3em] font-semibold text-cream">
              VELMORA
            </Link>
            <p className="text-cream/50 text-sm mt-4 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Premium materials, timeless design, accessible luxury.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-cream/50 hover:text-gold transition-colors" aria-label="Instagram">
                <Camera className="w-4 h-4" />
              </a>
              <a href="#" className="text-cream/50 hover:text-gold transition-colors" aria-label="Pinterest">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="text-cream/50 hover:text-gold transition-colors" aria-label="TikTok">
                <Heart className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key}>
              <h4 className="text-cream text-xs tracking-widest uppercase font-medium mb-4">
                {key}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-cream/50 text-sm hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-xs">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-4 text-cream/40 text-xs">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

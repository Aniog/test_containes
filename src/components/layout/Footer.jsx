import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Shop: ['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Best Sellers'],
    Help: ['Contact Us', 'FAQs', 'Shipping Info', 'Returns', 'Size Guide'],
    Company: ['Our Story', 'Journal', 'Careers', 'Press', 'Sustainability'],
  };

  return (
    <footer className="bg-velmora-charcoal text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="mb-16 pb-16 border-b border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-3xl uppercase tracking-wider mb-4">
              Join the Velmora Family
            </h3>
            <p className="text-white/60 mb-8 text-sm tracking-wide">
              Subscribe for exclusive offers and be the first to discover new collections.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-velmora-gold/50 transition-colors"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="bg-velmora-gold text-white px-8 py-3 uppercase tracking-wider text-sm font-medium hover:bg-velmora-gold-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo and Description */}
          <div>
            <Link
              to="/"
              className="font-serif text-3xl text-white uppercase tracking-widest mb-6 block"
            >
              Velmora
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Crafting demi-fine jewelry that celebrates life's precious moments. 
              Each piece is designed with intention and crafted to be treasured.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-serif text-sm uppercase tracking-wider mb-6 text-velmora-gold">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase().replace(' ', '-')}`}
                      className="text-white/60 hover:text-velmora-gold transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <CreditCard className="w-6 h-6 text-white/40" />
            <span className="text-white/40 text-sm">Secure Payment</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    shop: [
      { name: 'All Jewelry', href: '/collection' },
      { name: 'Earrings', href: '/collection?category=earrings' },
      { name: 'Necklaces', href: '/collection?category=necklaces' },
      { name: 'Huggies', href: '/collection?category=huggies' },
      { name: 'Gift Sets', href: '/collection?category=sets' },
    ],
    help: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Shipping & Returns', href: '#shipping' },
      { name: 'Size Guide', href: '#size-guide' },
      { name: 'Care Instructions', href: '#care' },
      { name: 'FAQs', href: '#faqs' },
    ],
    company: [
      { name: 'Our Story', href: '#about' },
      { name: 'Journal', href: '#journal' },
      { name: 'Sustainability', href: '#sustainability' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
    { name: 'Facebook', href: 'https://facebook.com', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  ];

  return (
    <footer className="bg-charcoal text-ivory">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container-wide py-12 md:py-16">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-serif text-2xl md:text-3xl mb-3">Stay in the Glow</h3>
            <p className="text-ivory/70 mb-6">Subscribe for exclusive access, styling tips, and 10% off your first order.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-ivory placeholder:text-ivory/50 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gold text-charcoal font-semibold text-xs uppercase tracking-widest hover:bg-gold-hover transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.3em] text-ivory hover:text-gold transition-colors">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-ivory/60 leading-relaxed">
              Demi-fine gold jewelry crafted for moments that matter. Designed in NYC, made to be treasured.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-ivory/60 hover:text-gold transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-ivory/40 mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-ivory/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-ivory/40 mb-4">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-ivory/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-ivory/40 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-ivory/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-ivory/40">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {/* Payment method badges - text-based for reliability */}
              <span className="px-2 py-1 text-xs text-ivory/50 border border-ivory/20 rounded">VISA</span>
              <span className="px-2 py-1 text-xs text-ivory/50 border border-ivory/20 rounded">MC</span>
              <span className="px-2 py-1 text-xs text-ivory/50 border border-ivory/20 rounded">AMEX</span>
              <span className="px-2 py-1 text-xs text-ivory/50 border border-ivory/20 rounded">PayPal</span>
              <span className="text-xs text-ivory/40 ml-2">Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Shop: ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'New Arrivals'],
    Help: ['Contact Us', 'Shipping & Returns', 'Care Guide', 'FAQs', 'Size Guide'],
    Company: ['Our Story', 'Sustainability', 'Press', 'Careers', 'Journal'],
  };

  const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'PayPal'];

  return (
    <footer className="bg-velmora-charcoal text-velmora-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-widest text-velmora-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-velmora-taupe text-sm leading-relaxed max-w-xs">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman who appreciates quiet luxury.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="p-2 border border-velmora-taupe/30 rounded-full hover:border-velmora-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-velmora-taupe/30 rounded-full hover:border-velmora-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-velmora-taupe/30 rounded-full hover:border-velmora-gold transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-serif text-lg tracking-wider mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-sm text-velmora-taupe hover:text-velmora-gold transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Hairline Divider */}
        <div className="hairline bg-velmora-taupe/20 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-taupe">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          
          {/* Payment Icons */}
          <div className="flex items-center space-x-3">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="px-2 py-1 text-xs text-velmora-taupe border border-velmora-taupe/20 rounded"
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
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, PinIcon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Shop: [
      { name: 'All Jewelry', path: '/shop' },
      { name: 'Earrings', path: '/shop?category=earrings' },
      { name: 'Necklaces', path: '/shop?category=necklaces' },
      { name: 'Huggies', path: '/shop?category=huggies' },
      { name: 'Collections', path: '/shop' },
    ],
    Help: [
      { name: 'Shipping', path: '/' },
      { name: 'Returns', path: '/' },
      { name: 'Care Guide', path: '/' },
      { name: 'Contact', path: '/' },
      { name: 'FAQ', path: '/' },
    ],
    Company: [
      { name: 'Our Story', path: '/' },
      { name: 'Journal', path: '/' },
      { name: 'Sustainability', path: '/' },
      { name: 'Privacy Policy', path: '/' },
      { name: 'Terms', path: '/' },
    ],
  };

  return (
    <footer className="bg-secondary pt-20 pb-10 border-t border-border mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="lg:col-span-2 pr-12">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl tracking-[0.2em] font-medium italic">
                VELMORA
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-6 leading-relaxed">
              Fine jewelry for the modern woman. Quiet luxury, crafted to be treasured for a lifetime.
            </p>
            <div className="flex space-x-6 text-foreground/70">
              <a href="#" className="hover:text-primary transition-colors"><Instagram size={18} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Facebook size={18} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter size={18} strokeWidth={1.5} /></a>
            </div>
          </div>

          {/* Links Column */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="title-uppercase mb-6 text-foreground">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex space-x-6">
            {/* Mock Payment Icons */}
            <span className="text-[10px] tracking-widest text-muted-foreground uppercase py-1 px-2 border border-border">Visa</span>
            <span className="text-[10px] tracking-widest text-muted-foreground uppercase py-1 px-2 border border-border">Mastercard</span>
            <span className="text-[10px] tracking-widest text-muted-foreground uppercase py-1 px-2 border border-border">Amex</span>
            <span className="text-[10px] tracking-widest text-muted-foreground uppercase py-1 px-2 border border-border">PayPal</span>
            <span className="text-[10px] tracking-widest text-muted-foreground uppercase py-1 px-2 border border-border">Apple Pay</span>
          </div>
          <p className="text-[10px] tracking-widest text-muted-foreground uppercase">
            © {currentYear} Velmora Fine Jewelry. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

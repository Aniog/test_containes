import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard, Truck, RotateCcw, Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Shop',
      links: [
        { name: 'Earrings', path: '/shop?category=Earrings' },
        { name: 'Necklaces', path: '/shop?category=Necklaces' },
        { name: 'Huggies', path: '/shop?category=Huggies' },
        { name: 'New Arrivals', path: '/shop?sort=newest' },
        { name: 'Bestsellers', path: '/shop?sort=bestsellers' },
      ],
    },
    {
      title: 'Help',
      links: [
        { name: 'FAQ', path: '/faq' },
        { name: 'Shipping & Returns', path: '/shipping' },
        { name: 'Size Guide', path: '/size-guide' },
        { name: 'Care Instructions', path: '/care' },
        { name: 'Contact Us', path: '/contact' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Velmora', path: '/about' },
        { name: 'Our Materials', path: '/materials' },
        { name: 'Sustainability', path: '/sustainability' },
        { name: 'Press', path: '/press' },
        { name: 'Journal', path: '/journal' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/velmora' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/velmora' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/velmora' },
  ];

  const trustBadges = [
    { icon: Truck, text: 'Free Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Shield, text: 'Secure Payment' },
    { icon: CreditCard, text: 'Multiple Payments' },
  ];

  return (
    <footer className="bg-charcoal text-cream">
      {/* Trust Badges */}
      <div className="border-b border-gray-border/20">
        <div className="container-custom py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 text-sm">
                <badge.icon size={20} className="text-gold" />
                <span className="font-sans">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="font-serif text-3xl font-medium tracking-wider">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-gray-warm leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention, 
              using 18k gold plating and hypoallergenic materials for everyday luxury.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 hover:text-gold transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-serif text-lg font-medium mb-6 tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="font-sans text-sm text-gray-warm hover:text-gold transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-border/20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="font-sans text-sm text-gray-warm">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <img 
                src="https://via.placeholder.com/40x25/FFFFFF/000000?text=VISA" 
                alt="Visa"
                className="h-6 opacity-70"
              />
              <img 
                src="https://via.placeholder.com/40x25/FFFFFF/000000?text=MC" 
                alt="Mastercard"
                className="h-6 opacity-70"
              />
              <img 
                src="https://via.placeholder.com/40x25/FFFFFF/000000?text=AMEX" 
                alt="Amex"
                className="h-6 opacity-70"
              />
              <img 
                src="https://via.placeholder.com/40x25/FFFFFF/000000?text=PP" 
                alt="PayPal"
                className="h-6 opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
import React from 'react';
import { Facebook, Instagram, Twitter, CreditCard, Truck, RefreshCw, Shield } from 'lucide-react';

export default function Footer() {
  const footerColumns = [
    {
      title: 'Shop',
      links: [
        { label: 'Earrings', href: '/shop?category=Earrings' },
        { label: 'Necklaces', href: '/shop?category=Necklaces' },
        { label: 'Huggies', href: '/shop?category=Huggies' },
        { label: 'New Arrivals', href: '/shop?sort=newest' },
        { label: 'Bestsellers', href: '/shop?sort=bestsellers' }
      ]
    },
    {
      title: 'Help',
      links: [
        { label: 'FAQ', href: '/faq' },
        { label: 'Shipping Info', href: '/shipping' },
        { label: 'Returns', href: '/returns' },
        { label: 'Size Guide', href: '/size-guide' },
        { label: 'Contact Us', href: '/contact' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Velmora', href: '/about' },
        { label: 'Our Materials', href: '/materials' },
        { label: 'Sustainability', href: '/sustainability' },
        { label: 'Press', href: '/press' },
        { label: 'Careers', href: '/careers' }
      ]
    }
  ];
  
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/velmora', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/velmora', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/velmora', label: 'Twitter' }
  ];
  
  const paymentIcons = [
    { name: 'Visa', pattern: 'bg-blue-600' },
    { name: 'Mastercard', pattern: 'bg-red-500' },
    { name: 'Amex', pattern: 'bg-blue-500' },
    { name: 'PayPal', pattern: 'bg-yellow-500' },
    { name: 'Apple Pay', pattern: 'bg-black' }
  ];
  
  return (
    <footer className="bg-velmora-black text-velmora-white">
      {/* Trust Badges */}
      <div className="border-b border-velmora-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="flex items-center space-x-3">
              <Truck className="w-6 h-6 text-velmora-gold" />
              <div>
                <p className="text-sm font-medium">Free Worldwide Shipping</p>
                <p className="text-xs text-velmora-warm-gray">On orders over $50</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <RefreshCw className="w-6 h-6 text-velmora-gold" />
              <div>
                <p className="text-sm font-medium">30-Day Returns</p>
                <p className="text-xs text-velmora-warm-gray">No questions asked</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-velmora-gold" />
              <div>
                <p className="text-sm font-medium">18K Gold Plated</p>
                <p className="text-xs text-velmora-warm-gray">Premium quality</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <CreditCard className="w-6 h-6 text-velmora-gold" />
              <div>
                <p className="text-sm font-medium">Secure Payment</p>
                <p className="text-xs text-velmora-warm-gray">SSL encrypted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl tracking-widest">VELMORA</h3>
            <p className="text-sm text-velmora-warm-gray leading-relaxed">
              Quiet luxury, thoughtfully crafted. Demi-fine jewelry designed to be treasured and worn every day.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-velmora-warm-gray hover:text-velmora-gold transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Link Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="font-medium text-sm uppercase tracking-wider mb-4">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-velmora-warm-gray hover:text-velmora-gold transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-velmora-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-velmora-warm-gray">
              © 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-2">
              <span className="text-xs text-velmora-warm-gray mr-2">We accept:</span>
              {paymentIcons.map((icon) => (
                <div
                  key={icon.name}
                  className={`w-10 h-6 ${icon.pattern} rounded flex items-center justify-center`}
                  title={icon.name}
                >
                  <span className="text-white text-xs font-bold">
                    {icon.name.charAt(0)}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="flex space-x-4 text-xs text-velmora-warm-gray">
              <a href="/privacy" className="hover:text-velmora-gold transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-velmora-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

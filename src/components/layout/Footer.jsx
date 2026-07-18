import React from 'react';

export default function Footer() {
  const shopLinks = [
    { label: 'Earrings', href: '/shop?category=Earrings' },
    { label: 'Necklaces', href: '/shop?category=Necklaces' },
    { label: 'Huggies', href: '/shop?category=Huggies' },
    { label: 'New Arrivals', href: '/shop?sort=newest' },
    { label: 'Best Sellers', href: '/shop?sort=bestsellers' }
  ];

  const helpLinks = [
    { label: 'FAQ', href: '/faq' },
    { label: 'Shipping & Returns', href: '/shipping' },
    { label: 'Size Guide', href: '/size-guide' },
    { label: 'Care Instructions', href: '/care' },
    { label: 'Contact Us', href: '/contact' }
  ];

  const companyLinks = [
    { label: 'Our Story', href: '/about' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Press', href: '/press' },
    { label: 'Careers', href: '/careers' },
    { label: 'Wholesale', href: '/wholesale' }
  ];

  const socialLinks = [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Pinterest', href: 'https://pinterest.com' },
    { label: 'TikTok', href: 'https://tiktok.com' }
  ];

  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-velmora py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-serif text-white mb-6">VELMORA</h3>
            <p className="body-text text-warm-gray-light mb-8 max-w-xs">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention, made to last, and priced for real life.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-gray-light hover:text-gold transition-colors"
                  aria-label={social.label}
                >
                  {social.label === 'Instagram' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-sm font-sans font-medium tracking-wider uppercase text-white mb-6">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="body-text text-warm-gray-light hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="text-sm font-sans font-medium tracking-wider uppercase text-white mb-6">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="body-text text-warm-gray-light hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-sans font-medium tracking-wider uppercase text-white mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="body-text text-warm-gray-light hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Icons & Copyright */}
        <div className="divider-light mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-sm text-warm-gray-light">Secure Payment:</span>
            {/* Payment Icons - Using simple text placeholders */}
            <span className="text-xs text-warm-gray-light border border-warm-gray-light px-2 py-1">VISA</span>
            <span className="text-xs text-warm-gray-light border border-warm-gray-light px-2 py-1">MC</span>
            <span className="text-xs text-warm-gray-light border border-warm-gray-light px-2 py-1">AMEX</span>
            <span className="text-xs text-warm-gray-light border border-warm-gray-light px-2 py-1">PP</span>
          </div>
          <p className="text-sm text-warm-gray-light">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

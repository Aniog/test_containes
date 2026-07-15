import { Link } from 'react-router-dom';

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Huggies', to: '/shop?category=huggies' },
      { label: 'Gift Sets', to: '/shop' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', to: '#' },
      { label: 'Size Guide', to: '#' },
      { label: 'FAQ', to: '#' },
      { label: 'Contact Us', to: '#' },
      { label: 'Track Order', to: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '#' },
      { label: 'Careers', to: '#' },
      { label: 'Press', to: '#' },
    ],
  },
];

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-velmora-light">
      {/* Main footer content */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Logo + tagline */}
          <div className="md:col-span-4">
            <Link to="/" className="font-serif text-3xl font-medium tracking-[0.08em] text-velmora-white">
              VELMORA
            </Link>
            <p className="mt-4 text-body-sm text-velmora-muted max-w-xs leading-relaxed">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman — 
              elegant enough for special occasions, durable enough for every day.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-5 mt-6">
              {['Instagram', 'Pinterest', 'TikTok', 'Facebook'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="text-velmora-muted hover:text-velmora-gold transition-colors duration-300 text-caption uppercase tracking-wider"
                  aria-label={social}
                >
                  {social === 'Instagram' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <circle cx="12" cy="12" r="5"/>
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                    </svg>
                  )}
                  {social === 'Pinterest' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                    </svg>
                  )}
                  {social === 'TikTok' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.97a8.19 8.19 0 004.76 1.52V7.04a4.84 4.84 0 01-1-.35z"/>
                    </svg>
                  )}
                  {social === 'Facebook' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map(column => (
            <div key={column.title} className="md:col-span-2">
              <h3 className="text-caption uppercase tracking-widest-xl text-velmora-gold mb-5 font-medium">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-body-sm text-velmora-silver hover:text-velmora-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Trust badges */}
          <div className="md:col-span-2">
            <h3 className="text-caption uppercase tracking-widest-xl text-velmora-gold mb-5 font-medium">
              Our Promise
            </h3>
            <ul className="space-y-3 text-body-sm text-velmora-silver">
              <li>18K Gold Plated</li>
              <li>Hypoallergenic</li>
              <li>Nickel-Free</li>
              <li>Free Worldwide Shipping</li>
              <li>30-Day Returns</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-velmora-dark">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-velmora-slate tracking-wide">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {paymentIcons.map(icon => (
              <div
                key={icon}
                className="w-10 h-6 bg-velmora-dark rounded flex items-center justify-center"
                title={icon}
              >
                <span className="text-[8px] text-velmora-muted font-medium uppercase tracking-wide">
                  {icon.slice(0, 4)}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 text-[11px] text-velmora-slate">
            <a href="#" className="hover:text-velmora-light transition-colors">Privacy Policy</a>
            <span className="text-velmora-graphite">|</span>
            <a href="#" className="hover:text-velmora-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

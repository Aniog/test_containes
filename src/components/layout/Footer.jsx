import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

// Pinterest SVG icon (not in lucide-react)
function PinterestIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.641 1.267 1.408 0 .858-.546 2.141-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.137-1.868 3.137-4.566 0-2.387-1.715-4.057-4.163-4.057-2.836 0-4.5 2.127-4.5 4.326 0 .856.33 1.775.741 2.276a.3.3 0 0 1 .069.286c-.076.313-.244.995-.277 1.134-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
    </svg>
  );
}

const footerLinks = {
  Shop: [
    { label: 'Earrings', href: '/shop?category=Earrings' },
    { label: 'Necklaces', href: '/shop?category=Necklaces' },
    { label: 'Huggies', href: '/shop?category=Huggies' },
    { label: 'Gift Sets', href: '/shop?category=Sets' },
    { label: 'New Arrivals', href: '/shop' },
  ],
  Help: [
    { label: 'Shipping & Returns', href: '/#' },
    { label: 'Size Guide', href: '/#' },
    { label: 'Care Instructions', href: '/#' },
    { label: 'FAQ', href: '/#' },
    { label: 'Contact Us', href: '/#' },
  ],
  Company: [
    { label: 'Our Story', href: '/#about' },
    { label: 'Sustainability', href: '/#' },
    { label: 'Press', href: '/#' },
    { label: 'Careers', href: '/#' },
    { label: 'Journal', href: '/#' },
  ],
};

const paymentIcons = ['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'];

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 pb-12 border-b border-stone/20">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-cormorant text-2xl font-medium tracking-widest uppercase text-cream block mb-4"
            >
              Velmora
            </Link>
            <p className="font-inter text-xs text-cream-muted leading-relaxed mb-6 max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be worn every day, treasured forever.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-cream-muted hover:text-gold transition-colors duration-200">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-cream-muted hover:text-gold transition-colors duration-200">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Pinterest" className="text-cream-muted hover:text-gold transition-colors duration-200">
                <PinterestIcon size={16} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-inter text-xs tracking-widest uppercase text-gold mb-5">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-inter text-xs text-cream-muted hover:text-cream transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="font-inter text-xs text-cream-muted/60">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {paymentIcons.map((icon) => (
              <div
                key={icon}
                className="bg-stone/20 border border-stone/20 rounded px-2 py-1 font-inter text-[9px] tracking-wider text-cream-muted/70"
              >
                {icon}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <a href="#" className="font-inter text-xs text-cream-muted/60 hover:text-cream-muted transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="font-inter text-xs text-cream-muted/60 hover:text-cream-muted transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

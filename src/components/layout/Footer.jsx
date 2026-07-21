import { Link } from 'react-router-dom';

const shopLinks = [
  { label: 'All Jewelry', to: '/shop' },
  { label: 'Earrings', to: '/shop?category=earrings' },
  { label: 'Necklaces', to: '/shop?category=necklaces' },
  { label: 'Huggies', to: '/shop?category=earrings&subcategory=huggies' },
  { label: 'Gift Sets', to: '/shop?category=sets' },
];

const helpLinks = [
  { label: 'Shipping & Returns', to: '/about' },
  { label: 'Care Guide', to: '/about' },
  { label: 'Size Guide', to: '/about' },
  { label: 'Contact Us', to: '/about' },
  { label: 'FAQ', to: '/about' },
];

const companyLinks = [
  { label: 'Our Story', to: '/about' },
  { label: 'Sustainability', to: '/about' },
  { label: 'Journal', to: '/about' },
  { label: 'Stockists', to: '/about' },
];

export default function Footer() {
  return (
    <footer className="bg-velvet-950 text-velvet-200">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-serif text-2xl tracking-[0.3em] uppercase text-white mb-4">
              VELMORA
            </h3>
            <p className="text-sm text-velvet-300 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. 18K gold-plated, hypoallergenic, designed to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-gold mb-4 font-medium">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-velvet-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-gold mb-4 font-medium">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-velvet-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-gold mb-4 font-medium">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-velvet-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-velvet-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velvet-500">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-xs text-velvet-500">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
          <div className="flex items-center space-x-5">
            <span className="text-xs text-velvet-500 hover:text-white cursor-pointer transition-colors">Instagram</span>
            <span className="text-xs text-velvet-500 hover:text-white cursor-pointer transition-colors">Pinterest</span>
            <span className="text-xs text-velvet-500 hover:text-white cursor-pointer transition-colors">Facebook</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
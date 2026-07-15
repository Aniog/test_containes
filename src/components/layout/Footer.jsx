import { Link } from 'react-router-dom';

const shopLinks = [
  { label: 'All Jewelry', to: '/shop' },
  { label: 'Earrings', to: '/shop/earrings' },
  { label: 'Necklaces', to: '/shop/necklaces' },
  { label: 'Huggies', to: '/shop/huggies' },
  { label: 'Gift Sets', to: '/shop?category=necklaces' },
];

const helpLinks = [
  { label: 'Shipping & Returns', to: '/shipping' },
  { label: 'Size Guide', to: '/size-guide' },
  { label: 'Care Guide', to: '/care' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact Us', to: '/contact' },
];

const companyLinks = [
  { label: 'Our Story', to: '/about' },
  { label: 'Sustainability', to: '/sustainability' },
  { label: 'Journal', to: '/journal' },
  { label: 'Careers', to: '/careers' },
];

export default function Footer() {
  return (
    <footer className="bg-velvet-base text-white mt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[.2em] text-white hover:text-velvet-accent transition-colors">
              VELMORA
            </Link>
            <p className="text-velvet-muted text-sm mt-4 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. 18K gold-plated, hypoallergenic, designed for everyday elegance.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-velvet-muted mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-white/70 hover:text-velvet-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-velvet-muted mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-white/70 hover:text-velvet-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-velvet-muted mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-white/70 hover:text-velvet-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-xs text-white/40 hover:text-velvet-accent cursor-pointer transition-colors">Instagram</span>
            <span className="text-xs text-white/40 hover:text-velvet-accent cursor-pointer transition-colors">Pinterest</span>
            <span className="text-xs text-white/40 hover:text-velvet-accent cursor-pointer transition-colors">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

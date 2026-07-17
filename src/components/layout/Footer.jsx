import { Link } from 'react-router-dom';

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'];
const helpLinks = ['Shipping & Returns', 'Size Guide', 'Jewelry Care', 'FAQ', 'Contact Us'];
const companyLinks = ['Our Story', 'Sustainability', 'Journal', 'Careers', 'Wholesale'];

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.28em] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-stone-400 max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Premium materials, accessible prices, designed to be treasured.
            </p>
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok'].map((s) => (
                <span key={s} className="text-xs tracking-widest uppercase text-stone-400 hover:text-warm-400 cursor-pointer transition-colors">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-sm text-stone-400 hover:text-warm-400 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white mb-4">Help</h4>
            <ul className="space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-sm text-stone-400 hover:text-warm-400 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link to="/about" className="text-sm text-stone-400 hover:text-warm-400 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-stone-800 mt-14 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'Shop Pay'].map((p) => (
              <span key={p} className="tracking-widest">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

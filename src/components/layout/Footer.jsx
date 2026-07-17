import { Link } from 'react-router-dom';

const links = {
  shop: [
    { label: 'All Jewelry', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop' },
  ],
  help: [
    { label: 'Shipping & Returns', to: '/about' },
    { label: 'Size Guide', to: '/about' },
    { label: 'FAQ', to: '/about' },
    { label: 'Contact Us', to: '/about' },
  ],
  company: [
    { label: 'Our Story', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Sustainability', to: '/about' },
    { label: 'Press', to: '/about' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#FAF8F5]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16 lg:py-20">
          <div className="lg:col-span-2">
            <Link to="/">
              <span className="font-serif text-2xl tracking-[0.2em] text-[#FAF8F5]">VELMORA</span>
            </Link>
            <p className="text-sm text-[#FAF8F5]/60 mt-4 max-w-xs leading-relaxed">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman — accessible luxury that lasts.
            </p>
            <div className="flex gap-5 mt-6">
              {['Instagram', 'Pinterest', 'TikTok'].map(s => (
                <a key={s} href="#" className="text-[#FAF8F5]/50 text-xs uppercase tracking-wider hover:text-[#C5A572] transition-colors">{s}</a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[#FAF8F5]/40 mb-5">{title}</h3>
              <ul className="space-y-3">
                {items.map(link => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-[#FAF8F5]/70 hover:text-[#C5A572] transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="h-px bg-[#FAF8F5]/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8">
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(icon => (
              <div key={icon} className="px-2.5 py-1 border border-[#FAF8F5]/20 rounded text-[10px] text-[#FAF8F5]/50 uppercase tracking-wider">{icon}</div>
            ))}
          </div>
          <p className="text-xs text-[#FAF8F5]/40">&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

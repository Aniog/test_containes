import { Heart } from 'lucide-react';

const shopLinks = [
  { label: 'All Jewelry',  path: '/shop' },
  { label: 'Earrings',     path: '/shop' },
  { label: 'Necklaces',    path: '/shop' },
  { label: 'Huggies',      path: '/shop' },
  { label: 'Gift Sets',    path: '/shop' },
];

const helpLinks = [
  { label: 'Shipping & Returns' },
  { label: 'Size Guide' },
  { label: 'FAQ' },
  { label: 'Contact Us' },
  { label: 'Track Order' },
];

const companyLinks = [
  { label: 'Our Story' },
  { label: 'Journal' },
  { label: 'Press' },
  { label: 'Careers' },
  { label: 'Sustainability' },
];

export default function Footer({ navigate }) {
  return (
    <footer className="bg-velmora-charcoal text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          {/* Brand col */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl font-semibold text-white tracking-[0.15em] uppercase mb-4">
              Velmora
            </h3>
            <p className="text-[13px] leading-relaxed text-white/60 max-w-[220px]">
              Crafting demi-fine gold jewelry designed to be treasured, every single day.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {['Instagram', 'Pinterest', 'TikTok'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-velmora-gold hover:text-velmora-gold transition-colors text-xs font-medium"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {[
            { title: 'Shop', links: shopLinks },
            { title: 'Help', links: helpLinks },
            { title: 'Company', links: companyLinks },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-[0.15em] text-white font-semibold mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5 list-none p-0 m-0">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <button
                      onClick={() => l.path && navigate(l.path)}
                      className="text-[13px] text-white/50 hover:text-velmora-gold transition-colors bg-transparent border-none p-0"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-1">
            Made with <Heart size={12} className="text-velmora-gold mx-0.5" /> for you
          </div>
          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((p) => (
              <span
                key={p}
                className="px-2 py-0.5 rounded border border-white/15 text-[10px] text-white/50"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

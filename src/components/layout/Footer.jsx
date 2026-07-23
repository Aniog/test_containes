import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, CreditCard, Landmark, Wallet, Banknote } from 'lucide-react';

const columns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=Earrings' },
      { label: 'Necklaces', to: '/shop?category=Necklaces' },
      { label: 'Huggies', to: '/shop?category=Huggies' },
      { label: 'Gift Sets', to: '/shop?category=Sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Delivery', to: '/shop' },
      { label: 'Returns & Exchanges', to: '/shop' },
      { label: 'Care Guide', to: '/shop' },
      { label: 'Size Guide', to: '/shop' },
      { label: 'Contact Us', to: '/shop' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/#story' },
      { label: 'Journal', to: '/#journal' },
      { label: 'Sustainability', to: '/#story' },
      { label: 'Stockists', to: '/#story' },
    ],
  },
];

const paymentIcons = [CreditCard, Landmark, Wallet, Banknote];

export default function Footer() {
  return (
    <footer className="border-t border-umber bg-onyx">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              to="/"
              className="font-serif text-2xl font-medium uppercase tracking-[0.35em] text-ivory"
            >
              Velmora
            </Link>
            <p className="mt-5 max-w-sm font-sans text-sm leading-relaxed text-sand">
              Demi-fine jewelry crafted to be treasured. Designed in our atelier,
              plated in 18K gold, and made for the moments that matter — big and small.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  onClick={(e) => e.preventDefault()}
                  className="flex h-9 w-9 items-center justify-center border border-umber text-sand transition-all duration-300 hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h3 className="text-[11px] font-sans font-medium uppercase tracking-[0.24em] text-gold">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-sans text-sm text-sand transition-colors duration-300 hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-umber pt-8 md:flex-row">
          <p className="font-sans text-xs text-sand">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2.5" aria-label="Accepted payment methods">
            {paymentIcons.map((Icon, i) => (
              <span
                key={i}
                className="flex h-8 w-11 items-center justify-center border border-umber text-sand"
              >
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </span>
            ))}
            <span className="ml-1 font-sans text-[11px] uppercase tracking-[0.16em] text-sand">
              Secure checkout
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

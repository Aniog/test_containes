import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const columns = [
    {
      title: 'Shop',
      links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'],
    },
    {
      title: 'Help',
      links: ['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQ', 'Contact Us'],
    },
    {
      title: 'Company',
      links: ['Our Story', 'Sustainability', 'Press', 'Careers', 'Stockists'],
    },
  ];

  return (
    <footer className="border-t border-hairline bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-[0.18em]">
              VELMORA
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Demi-fine jewelry designed to be worn daily and treasured forever. Hand-finished in small batches.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" className="text-muted transition-colors hover:text-foreground" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted transition-colors hover:text-foreground" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted transition-colors hover:text-foreground" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-8 md:flex-row">
          <p className="text-xs text-muted">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-2">
            {['VISA', 'MC', 'AMEX', 'PayPal', 'Apple Pay'].map((icon) => (
              <span
                key={icon}
                className="flex h-7 items-center justify-center rounded border border-hairline px-2 text-[9px] font-semibold uppercase tracking-wider text-muted"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

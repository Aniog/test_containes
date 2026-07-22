import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'],
    Help: ['Shipping & Returns', 'Care Guide', 'FAQ', 'Contact Us', 'Track Order'],
    Company: ['Our Story', 'Sustainability', 'Press', 'Careers', 'Wholesale'],
  };

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-block font-serif text-2xl font-semibold uppercase tracking-[0.18em]"
            >
              Velmora
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
              Demi-fine jewelry designed to be treasured. Ethically crafted,
              effortlessly worn, and made for the moments that matter.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label="Instagram" className="text-cream/70 hover:text-gold">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-cream/70 hover:text-gold">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-cream/70 hover:text-gold">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                {title}
              </h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-sm text-cream/70 transition-colors hover:text-cream"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 md:flex-row">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-cream/50">
            <span className="rounded border border-cream/20 px-2 py-1">Visa</span>
            <span className="rounded border border-cream/20 px-2 py-1">Mastercard</span>
            <span className="rounded border border-cream/20 px-2 py-1">Amex</span>
            <span className="rounded border border-cream/20 px-2 py-1">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

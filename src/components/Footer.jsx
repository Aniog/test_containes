import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'],
  Help: ['Shipping & Returns', 'Care Guide', 'FAQ', 'Contact Us'],
  Company: ['Our Story', 'Sustainability', 'Journal', 'Press'],
};

export function Footer() {
  return (
    <footer className="border-t border-velmora-stone bg-velmora-cream">
      <div className="mx-auto max-w-[1600px] px-5 py-14 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-2xl tracking-widest-xl uppercase text-velmora-charcoal"
            >
              Velmora
            </Link>
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-velmora-warm-gray">
              Demi-fine jewelry designed to be treasured. Crafted in 18K gold plate, made for
              everyday luxury.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="text-velmora-charcoal transition-colors hover:text-velmora-gold"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-velmora-charcoal transition-colors hover:text-velmora-gold"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-velmora-charcoal transition-colors hover:text-velmora-gold"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 md:col-span-6 md:col-start-7">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-velmora-charcoal">
                  {title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="font-sans text-sm text-velmora-warm-gray transition-colors hover:text-velmora-gold"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-velmora-stone pt-8 md:flex-row">
          <p className="text-xs text-velmora-taupe">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {['visa', 'mastercard', 'amex', 'paypal'].map((icon) => (
              <span
                key={icon}
                className="flex h-7 items-center rounded bg-velmora-stone px-2 text-[10px] font-semibold uppercase tracking-wide text-velmora-charcoal"
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

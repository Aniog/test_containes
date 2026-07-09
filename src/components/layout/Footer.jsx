import { Link } from 'react-router-dom';

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'];
const helpLinks = ['Shipping & Returns', 'Size Guide', 'Care Guide', 'Contact Us', 'FAQ'];
const companyLinks = ['Our Story', 'Sustainability', 'Journal', 'Stockists', 'Careers'];

const SocialIcon = ({ d, label }) => (
  <a
    href="#"
    className="text-velmora-stone hover:text-velmora-gold transition-colors"
    aria-label={label}
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={d} />
    </svg>
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-white">
      <div className="section-padding py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-xl tracking-widest text-white inline-block mb-4"
            >
              VELMORA
            </Link>
            <p className="text-velmora-stone text-sm leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for everyday elegance. 
              Designed in New York, worn everywhere.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <SocialIcon
                label="Instagram"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m.2 2A3.6 3.6 0 0 0 4.4 7.6v8.8C4.4 18.39 6.01 20 8 20h8a3.6 3.6 0 0 0 3.6-3.6V7.6C19.6 5.61 17.99 4 16 4H8m9.5 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
              />
              <SocialIcon
                label="Pinterest"
                d="M9.04 21.54c.96.65 2.2 1.08 3.54 1.08a8.66 8.66 0 1 0-3.01-16.76c-.18 1.15-.34 2.3-.24 3.3.1.54.6 2.5.6 2.5s-.16.32-.16.8c0 .75.44 1.4 1 1.4.47 0 .7-.66.7-1.2 0-.73-.47-1.82-.7-2.82-.2-.82.42-1.5 1.24-1.5 1.5 0 2.5 1.6 2.5 3.5 0 1.87-1.36 3.28-3.3 3.28-2.25 0-3.57-1.62-3.57-3.3 0-.65.25-1.35.57-1.73.06-.07.07-.14.05-.21-.05-.2-.17-.64-.2-.73-.03-.12-.1-.14-.18-.1-1.1.5-1.8 2.1-1.8 3.4 0 2.75 2.0 5.3 5.75 5.3 3.02 0 5.37-2.15 5.37-5.03 0-3.0-1.9-5.8-4.53-5.8-.9 0-1.73.46-2.02.98l-.55-2.1c-.18-.63-.64-1.42-.96-1.9z"
              />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-sm tracking-wider uppercase mb-5 text-white">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((l) => (
                <li key={l}>
                  <Link
                    to="/shop"
                    className="text-velmora-stone text-sm hover:text-velmora-gold transition-colors"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-sm tracking-wider uppercase mb-5 text-white">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-velmora-stone text-sm hover:text-velmora-gold transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-sm tracking-wider uppercase mb-5 text-white">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-velmora-stone text-sm hover:text-velmora-gold transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="hairline border-velmora-charcoal mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-velmora-stone text-xs">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-velmora-stone">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
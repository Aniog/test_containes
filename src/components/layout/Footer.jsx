import { Link } from 'react-router-dom';

function SocialIcon({ children, label }) {
  return (
    <a href="#" aria-label={label} className="text-velmora-cream/70 hover:text-velmora-goldlight transition-colors">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        {children}
      </svg>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-cream">
      <div className="section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl tracking-widest font-semibold mb-4">
              VELMORA
            </h3>
            <p className="font-sans text-sm text-velmora-taupe leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Designed to be treasured, made to last.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-taupe mb-6">
              Shop
            </h4>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="font-sans text-sm text-velmora-cream/80 hover:text-velmora-goldlight transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-taupe mb-6">
              Help
            </h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Care Guide', 'Size Guide', 'Contact Us', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="font-sans text-sm text-velmora-cream/80 hover:text-velmora-goldlight transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-taupe mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Careers', 'Press', 'Terms & Privacy'].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="font-sans text-sm text-velmora-cream/80 hover:text-velmora-goldlight transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline bg-velmora-cocoa my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-sans text-xs text-velmora-taupe">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <SocialIcon label="Instagram">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" fill="none" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </SocialIcon>
            <SocialIcon label="Facebook">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </SocialIcon>
            <SocialIcon label="Twitter">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </SocialIcon>
          </div>
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((card) => (
              <span
                key={card}
                className="px-2 py-1 border border-velmora-cocoa rounded text-[10px] font-sans text-velmora-taupe tracking-wide"
              >
                {card}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from 'react-router-dom';
import { Instagram, Facebook, Music2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-bone mt-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          <div className="col-span-2 md:col-span-1">
            <div className="font-serif text-3xl tracking-[0.25em] mb-4">VELMORA</div>
            <p className="text-sm text-bone/70 leading-relaxed max-w-xs">
              Demi-fine jewelry made to be treasured. Hand-finished in small
              batches. Ships worldwide from our atelier.
            </p>
          </div>

          <FooterCol
            title="Shop"
            links={[
              { to: '/shop?category=Earrings', label: 'Earrings' },
              { to: '/shop?category=Necklaces', label: 'Necklaces' },
              { to: '/shop?category=Huggies', label: 'Huggies' },
              { to: '/shop', label: 'All Jewelry' },
            ]}
          />
          <FooterCol
            title="Help"
            links={[
              { to: '#', label: 'Contact' },
              { to: '#', label: 'Shipping' },
              { to: '#', label: 'Returns' },
              { to: '#', label: 'Care Guide' },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { to: '/about', label: 'Our Story' },
              { to: '/journal', label: 'Journal' },
              { to: '#', label: 'Sustainability' },
              { to: '#', label: 'Press' },
            ]}
          />
        </div>

        <div className="mt-16 pt-8 border-t border-hairline-dark flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xs text-bone/60 tracking-wider">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 text-bone/70">
              <PaymentBadge label="VISA" />
              <PaymentBadge label="MC" />
              <PaymentBadge label="AMEX" />
              <PaymentBadge label="PAYPAL" />
              <PaymentBadge label="APPLE" />
            </div>
            <div className="flex items-center gap-4 text-bone/70">
              <a href="#" aria-label="Instagram" className="hover:text-champagne transition-colors">
                <Instagram className="w-4 h-4" strokeWidth={1.4} />
              </a>
              <a href="#" aria-label="TikTok" className="hover:text-champagne transition-colors">
                <Music2 className="w-4 h-4" strokeWidth={1.4} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-champagne transition-colors">
                <Facebook className="w-4 h-4" strokeWidth={1.4} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-[11px] uppercase tracking-[0.3em] text-champagne mb-5">{title}</h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              to={l.to}
              className="text-sm text-bone/80 hover:text-champagne transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PaymentBadge({ label }) {
  return (
    <span className="text-[9px] tracking-widest border border-bone/25 rounded-sm px-2 py-1 text-bone/70">
      {label}
    </span>
  );
}

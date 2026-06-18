import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import Button from '@/components/ui/Button';

const COLUMNS = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Huggies', to: '/shop?category=huggies' },
      { label: 'Gift Sets', to: '/shop?category=sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', to: '/about' },
      { label: 'Returns', to: '/about' },
      { label: 'Care Guide', to: '/journal' },
      { label: 'Sizing', to: '/about' },
      { label: 'Contact', to: '/about' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '/about' },
      { label: 'Press', to: '/about' },
      { label: 'Careers', to: '/about' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
          {/* Brand column */}
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-3xl text-cream"
              style={{ letterSpacing: '0.3em' }}
            >
              VELMORA
            </Link>
            <p className="mt-6 text-sm text-hairline leading-relaxed font-sans max-w-sm">
              Demi-fine jewelry, handcrafted in small batches. Designed to be
              worn every day, kept for a lifetime.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <SocialIcon href="#" label="Instagram"><Instagram size={16} strokeWidth={1.4} /></SocialIcon>
              <SocialIcon href="#" label="Twitter"><Twitter size={16} strokeWidth={1.4} /></SocialIcon>
              <SocialIcon href="#" label="Facebook"><Facebook size={16} strokeWidth={1.4} /></SocialIcon>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold-soft font-sans mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-cream hover:text-gold-soft transition-colors duration-300 font-sans"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter mini */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold-soft font-sans mb-5">
              Stay in touch
            </h4>
            <FooterMiniSubscribe />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-espresso-soft flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-xs text-hairline font-sans">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-hairline font-sans">
            <span className="uppercase tracking-[0.25em] text-gold-soft mr-2">We accept</span>
            <PaymentBadge label="VISA" />
            <PaymentBadge label="MC" />
            <PaymentBadge label="AMEX" />
            <PaymentBadge label="PAYPAL" />
            <PaymentBadge label="APPLE" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-9 h-9 inline-flex items-center justify-center border border-espresso-soft text-cream hover:border-gold hover:text-gold transition-colors duration-300"
    >
      {children}
    </a>
  );
}

function PaymentBadge({ label }) {
  return (
    <span className="inline-flex items-center justify-center px-2.5 py-1 border border-espresso-soft text-cream text-[10px] tracking-[0.15em] font-medium font-sans">
      {label}
    </span>
  );
}

function FooterMiniSubscribe() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail('');
  }

  if (done) {
    return (
      <p className="text-sm text-gold-soft font-sans">
        Thank you — please check your inbox for a welcome note.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="bg-transparent border-b border-espresso-soft focus:border-gold outline-none py-2 text-sm text-cream placeholder:text-mute font-sans transition-colors"
      />
      <Button type="submit" variant="outlineLight" size="sm" className="w-full">
        Subscribe
      </Button>
    </form>
  );
}

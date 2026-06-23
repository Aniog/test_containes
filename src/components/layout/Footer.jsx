import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-ink text-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-12 border-b border-cream/10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-xl tracking-widest text-cream hover:text-gold transition-colors duration-300 block mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.2em' }}
            >
              Small Hours
            </Link>
            <p className="text-cream/60 text-xs leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              Jewelry for the hours nobody sees.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-cream/60 hover:text-gold transition-colors duration-300" aria-label="Instagram">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors duration-300" aria-label="Facebook">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <p className="label-caps text-cream/40 mb-5">Collections</p>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'The Night Shift', to: '/collections/night-shift' },
                { label: 'Dawn Light', to: '/collections/dawn-light' },
                { label: 'Quiet Hours', to: '/collections/quiet-hours' },
                { label: 'Shop All', to: '/shop' },
              ].map(item => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-cream/70 hover:text-gold transition-colors duration-300 text-xs font-light"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <p className="label-caps text-cream/40 mb-5">Company</p>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'Our Story', to: '/story' },
                { label: 'Craftsmanship', to: '/story/craftsmanship' },
                { label: 'Sustainability', to: '/story/sustainability' },
                { label: 'Journal', to: '/journal' },
              ].map(item => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-cream/70 hover:text-gold transition-colors duration-300 text-xs font-light"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <p className="label-caps text-cream/40 mb-5">The Hours</p>
            <p className="text-cream/60 text-xs leading-relaxed font-light mb-5" style={{ fontFamily: 'Inter, sans-serif' }}>
              Stories, new pieces, and quiet notes — delivered slowly.
            </p>
            {subscribed ? (
              <p className="text-gold text-xs font-light" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}>
                Thank you. We'll be in touch.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="bg-transparent border-b border-cream/30 text-cream text-xs py-2 focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-cream/30"
                  style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.05em' }}
                />
                <button type="submit" className="btn-secondary text-cream border-cream/30 hover:bg-gold hover:text-ink hover:border-gold self-start">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 font-light" style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}>
            © 2026 Small Hours. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: 'Privacy Policy', to: '/privacy' },
              { label: 'Terms of Service', to: '/terms' },
              { label: 'Shipping Policy', to: '/shipping' },
              { label: 'Returns', to: '/returns' },
            ].map(item => (
              <Link
                key={item.to}
                to={item.to}
                className="text-cream/30 hover:text-cream/60 transition-colors duration-300"
                style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

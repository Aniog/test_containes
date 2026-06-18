import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      console.log('Newsletter signup:', email);
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 md:py-28 bg-obsidian relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-gold blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-manrope text-xs tracking-[0.15em] uppercase text-gold mb-4">
          Join the Circle
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ivory tracking-wide mb-4">
          10% Off Your First Order
        </h2>
        <p className="font-manrope text-sm leading-relaxed mb-10" style={{ color: 'rgba(253,250,246,0.6)' }}>
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center mx-auto mb-4">
              <span className="text-gold text-xl">✓</span>
            </div>
            <p className="font-cormorant text-2xl font-light text-ivory italic">
              Welcome to Velmora
            </p>
            <p className="font-manrope text-xs mt-2" style={{ color: 'rgba(253,250,246,0.5)' }}>
              Your discount code is on its way to your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent text-ivory font-manrope text-sm px-5 py-4 focus:outline-none transition-colors"
              style={{ border: '1px solid rgba(253,250,246,0.25)' }}
              onFocus={e => e.target.style.borderColor = '#C9A96E'}
              onBlur={e => e.target.style.borderColor = 'rgba(253,250,246,0.25)'}
            />
            <button
              type="submit"
              className="bg-gold text-ivory font-manrope text-xs tracking-[0.12em] uppercase px-8 py-4 hover:bg-gold-dark transition-colors flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="font-manrope text-[10px] mt-4" style={{ color: 'rgba(253,250,246,0.35)' }}>
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}

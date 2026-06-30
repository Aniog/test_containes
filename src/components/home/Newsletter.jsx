import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-velmora-obsidian py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-manrope text-xs uppercase tracking-widest text-velmora-champagne mb-4">
            Join the Inner Circle
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-ivory mb-4">
            10% off your first order
          </h2>
          <p className="font-manrope text-sm text-velmora-ivory/50 leading-relaxed mb-10">
            Subscribe for early access to new collections, exclusive offers, and styling inspiration delivered to your inbox.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-3 animate-fadeIn">
              <div className="w-12 h-12 border border-velmora-champagne flex items-center justify-center">
                <span className="text-velmora-champagne text-xl">✓</span>
              </div>
              <p className="font-cormorant text-xl font-light text-velmora-ivory italic">
                Welcome to Velmora
              </p>
              <p className="font-manrope text-xs text-velmora-ivory/50">
                Your 10% discount code is on its way to your inbox.
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
                className="flex-1 bg-transparent border border-velmora-ivory/20 text-velmora-ivory placeholder-velmora-ivory/30 font-manrope text-xs px-5 py-4 focus:outline-none focus:border-velmora-champagne transition-colors duration-200"
              />
              <button
                type="submit"
                className="bg-velmora-champagne text-velmora-obsidian font-manrope text-xs uppercase tracking-widest px-6 py-4 hover:bg-velmora-ivory transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-3 h-3" />
              </button>
            </form>
          )}

          <p className="font-manrope text-[10px] text-velmora-ivory/25 mt-5 uppercase tracking-widest">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

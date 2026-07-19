import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log('[Newsletter] Subscribing:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-20 lg:py-24 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-manrope text-xs uppercase tracking-[0.2em] text-gold mb-4">
            Join the Circle
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-ivory mb-4">
            10% off your first order
          </h2>
          <p className="font-manrope text-sm text-mink-light leading-relaxed mb-10">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="animate-fadeIn">
              <div className="w-10 h-px bg-gold mx-auto mb-4" />
              <p className="font-cormorant text-2xl italic text-ivory">
                Welcome to Velmora.
              </p>
              <p className="font-manrope text-xs text-mink-light mt-2 uppercase tracking-widest">
                Your 10% code is on its way.
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
                className="flex-1 bg-transparent border border-mink/40 text-ivory placeholder-mink/50 font-manrope text-sm px-5 py-3.5 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-obsidian font-manrope text-xs uppercase tracking-[0.12em] px-6 py-3.5 hover:bg-gold-light transition-colors flex items-center justify-center gap-2 flex-shrink-0"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </form>
          )}

          <p className="font-manrope text-[11px] text-mink/50 mt-5">
            No spam. Unsubscribe anytime. By subscribing you agree to our Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
}

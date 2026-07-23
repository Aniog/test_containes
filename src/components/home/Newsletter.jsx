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
    <section className="bg-obsidian py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-xl mx-auto text-center">
          {/* Gold accent line */}
          <div className="w-12 h-px bg-gold mx-auto mb-8" />

          <p className="font-manrope text-xs uppercase tracking-widest text-gold mb-3">
            Join the Inner Circle
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ivory mb-4">
            10% off your first order
          </h2>
          <p className="font-manrope text-sm text-ivory/50 leading-relaxed mb-10">
            Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
          </p>

          {submitted ? (
            <div className="animate-fadeIn">
              <p className="font-cormorant text-2xl italic text-gold mb-2">Thank you for joining.</p>
              <p className="font-manrope text-xs text-ivory/50">Your 10% discount code is on its way.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-gold/30 text-ivory placeholder-ivory/30 font-manrope text-xs px-5 py-4 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-ivory font-manrope text-xs uppercase tracking-widest px-6 py-4 hover:bg-gold-dark transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <p className="font-manrope text-[10px] text-ivory/25 mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}

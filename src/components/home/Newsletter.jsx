import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

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
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="bg-velmora-charcoal rounded-sm px-6 py-14 md:px-16 md:py-20 text-center">
          <p className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-velmora-gold mb-3">
            Stay Connected
          </p>
          <h2 className="font-serif text-[26px] md:text-[36px] font-light text-white mb-3">
            Join for 10% Off
          </h2>
          <p className="font-sans text-[13px] md:text-[14px] text-white/50 max-w-[400px] mx-auto mb-8">
            Subscribe to receive early access to new collections, styling inspiration, and exclusive offers.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-velmora-gold">
              <Check className="w-4 h-4" />
              <span className="font-sans text-[13px] font-medium">
                Thank you! Check your inbox for your code.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-[460px] mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3.5 bg-white/10 border border-white/15 text-white placeholder:text-white/40 font-sans text-[13px] focus:outline-none focus:border-velmora-gold/50 transition-colors"
              />
              <button
                type="submit"
                className="px-7 py-3.5 bg-velmora-gold text-white font-sans text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-velmora-gold-dark transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
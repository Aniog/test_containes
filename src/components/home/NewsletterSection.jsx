import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      console.log('[Newsletter] Subscribed:', email);
      setSubmitted(true);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gold">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-manrope text-xs tracking-[0.25em] uppercase text-obsidian/60 mb-4">
            Join the Circle
          </p>
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-obsidian font-light mb-4">
            10% off your first order
          </h2>
          <p className="font-manrope text-sm text-obsidian/70 mb-8 leading-relaxed">
            Subscribe for early access to new collections, styling inspiration, and exclusive offers. No spam, ever.
          </p>

          {submitted ? (
            <div className="py-4">
              <p className="font-cormorant text-xl text-obsidian italic">
                Welcome to Velmora. Your code is on its way. ✦
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
                className="flex-1 bg-obsidian/10 border border-obsidian/20 text-obsidian placeholder-obsidian/40 font-manrope text-sm px-5 py-4 focus:outline-none focus:border-obsidian/50 transition-colors"
              />
              <button
                type="submit"
                className="bg-obsidian text-ivory font-manrope text-xs tracking-[0.15em] uppercase px-7 py-4 hover:bg-obsidian-light transition-colors duration-300 flex items-center justify-center gap-2 flex-shrink-0"
              >
                Subscribe
                <ArrowRight size={13} strokeWidth={1.5} />
              </button>
            </form>
          )}

          <p className="font-manrope text-xs text-obsidian/40 mt-4">
            By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

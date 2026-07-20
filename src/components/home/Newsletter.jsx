import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log('[Newsletter] Subscribed:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-20 md:py-24 bg-ink">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="text-xs tracking-widest uppercase text-gold font-sans mb-4">Exclusive Access</p>
        <h2 className="font-serif text-4xl md:text-5xl text-parchment leading-tight">
          Join for 10% off<br />
          <em className="italic">your first order</em>
        </h2>
        <p className="mt-5 text-sm text-warm-gray font-sans leading-relaxed">
          Be the first to know about new collections, exclusive offers, and styling inspiration.
          No spam, ever. Unsubscribe anytime.
        </p>

        {submitted ? (
          <div className="mt-10 py-4 px-8 border border-gold/40 inline-block">
            <p className="text-sm text-gold font-sans tracking-wide">
              ✦ Thank you — your 10% code is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-warm-gray/40 text-parchment placeholder-warm-gray px-5 py-4 text-sm font-sans focus:outline-none focus:border-gold transition-colors duration-200"
            />
            <button
              type="submit"
              className="bg-gold text-ink px-6 py-4 text-xs tracking-widest uppercase font-medium font-sans hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="mt-5 text-xs text-warm-gray/60 font-sans">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  );
}

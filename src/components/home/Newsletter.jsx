import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    console.log('Newsletter signup:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-charcoal py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4">
          Exclusive Access
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-ivory mb-4 leading-tight">
          Join for 10% Off<br />
          <em className="not-italic text-gold-light">Your First Order</em>
        </h2>
        <p className="font-sans text-sm text-ivory/50 font-light mb-10 leading-relaxed">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration. Unsubscribe anytime.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center">
              <span className="text-gold text-lg">✓</span>
            </div>
            <p className="font-serif text-xl text-ivory font-light">
              Welcome to Velmora
            </p>
            <p className="font-sans text-xs text-ivory/50">
              Your 10% discount code is on its way to your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-obsidian/50 border border-ivory/15 text-ivory placeholder-ivory/30 font-sans text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian font-sans text-xs tracking-widest uppercase px-6 py-4 hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={12} strokeWidth={2} />
            </button>
          </form>
        )}

        <p className="font-sans text-[10px] text-ivory/25 mt-5 tracking-wide">
          By subscribing you agree to our Privacy Policy. No spam, ever.
        </p>
      </div>
    </section>
  );
}

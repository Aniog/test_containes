import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-obsidian py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="text-xs tracking-widest uppercase font-sans font-medium text-gold mb-4">
          Exclusive Access
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-cream font-light leading-tight mb-4">
          Join for 10% Off<br />
          <em className="italic">Your First Order</em>
        </h2>
        <p className="font-sans text-sm text-cream/60 mb-10 leading-relaxed">
          Be the first to know about new arrivals, exclusive offers, and the stories behind our pieces.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border border-gold flex items-center justify-center">
              <span className="text-gold text-lg">✦</span>
            </div>
            <p className="font-serif text-xl text-cream font-light">
              Welcome to Velmora
            </p>
            <p className="text-xs text-cream/50 font-sans">
              Your 10% discount code is on its way.
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
              className="flex-1 bg-transparent border border-cream/20 text-cream placeholder-cream/30 px-5 py-4 text-xs font-sans focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-cream px-6 py-4 text-xs tracking-widest uppercase font-sans font-semibold hover:bg-gold-dark transition-colors flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={12} />
            </button>
          </form>
        )}

        <p className="text-[10px] text-cream/30 font-sans mt-4 tracking-wide">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-obsidian py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4 font-medium">
          Join the Circle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-parchment font-light leading-tight mb-4">
          10% Off Your<br />
          <em className="italic text-gold">First Order</em>
        </h2>
        <p className="font-sans text-base text-parchment/60 mb-10 leading-relaxed">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="py-6">
            <p className="font-serif text-2xl text-gold italic mb-2">Thank you for joining.</p>
            <p className="font-sans text-sm text-parchment/60">
              Check your inbox for your welcome gift.
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
              className="flex-1 px-5 py-4 bg-parchment/10 border border-parchment/20 text-parchment placeholder-parchment/30 font-sans text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-4 bg-gold text-obsidian font-sans text-xs tracking-widest uppercase font-semibold hover:bg-gold-light transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="font-sans text-xs text-parchment/30 mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}

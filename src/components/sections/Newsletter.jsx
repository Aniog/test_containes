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
    <section className="py-16 md:py-20 px-5 md:px-8 bg-velmora-charcoal">
      <div className="max-w-[600px] mx-auto text-center">
        <p className="font-sans text-caption uppercase tracking-[0.2em] text-velmora-gold mb-3">
          Stay Connected
        </p>
        <h2 className="font-serif text-heading-2 md:text-heading-1 text-white mb-3">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-body text-white/60 mb-8">
          Be the first to discover new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-heading-3 text-velmora-gold mb-2">Welcome to Velmora</p>
            <p className="text-body-sm text-white/60">Check your inbox for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3 bg-white/10 border border-white/20 rounded-pill text-white text-body-sm placeholder:text-white/30 focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-velmora-gold text-white text-body-sm font-medium tracking-[0.06em] uppercase rounded-pill hover:bg-velmora-gold-dark transition-colors duration-300"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={2} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

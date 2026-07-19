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
    }
  };

  return (
    <section className="bg-charcoal py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-inter text-[10px] uppercase tracking-widest text-gold mb-4">
          Exclusive Access
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ivory tracking-wide mb-4">
          Join the Inner Circle
        </h2>
        <p className="font-inter text-sm text-ivory/60 leading-relaxed mb-10">
          Subscribe for 10% off your first order, early access to new collections, and styling inspiration delivered to your inbox.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center">
              <ArrowRight size={16} className="text-gold" />
            </div>
            <p className="font-cormorant text-xl italic text-ivory">
              Welcome to Velmora. Your 10% code is on its way.
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
              className="flex-1 bg-transparent border border-ivory/20 text-ivory placeholder-ivory/30 font-inter text-xs px-5 py-4 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-white font-inter text-xs uppercase tracking-widest px-8 py-4 hover:bg-gold-light transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="font-inter text-[10px] text-ivory/30 mt-5">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

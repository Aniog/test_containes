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
        <p className="text-xs uppercase tracking-widest font-sans text-gold mb-4">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-ivory leading-snug mb-4">
          10% off your first order
        </h2>
        <p className="text-sm font-sans text-ivory/50 leading-relaxed mb-10 max-w-sm mx-auto">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3 animate-fadeIn">
            <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center">
              <span className="text-gold text-lg">✓</span>
            </div>
            <p className="font-serif text-lg font-light text-ivory">
              Welcome to Velmora.
            </p>
            <p className="text-xs font-sans text-ivory/50">
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
              className="flex-1 bg-transparent border border-ivory/20 text-ivory placeholder-ivory/30 px-5 py-3.5 text-xs font-sans focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-ivory px-6 py-3.5 text-xs uppercase tracking-widest font-sans hover:bg-gold-dark transition-colors duration-200 flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={13} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="text-[10px] font-sans text-ivory/25 mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log('[Newsletter] Subscribing:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-charcoal py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-4">
          Join the Circle
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ivory tracking-wide">
          10% off your first order
        </h2>
        <p className="font-inter text-sm text-mist mt-4 leading-relaxed">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="mt-10 py-4 px-8 border border-gold/40 inline-block">
            <p className="font-cormorant text-xl text-gold italic">
              Thank you for joining Velmora.
            </p>
            <p className="font-inter text-xs text-mist mt-1">
              Your 10% discount code is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-stone/40 text-ivory placeholder-mist font-inter text-xs px-5 py-4 focus:outline-none focus:border-gold transition-colors duration-200"
            />
            <button
              type="submit"
              className="bg-gold text-ivory font-inter text-xs uppercase tracking-[0.1em] px-6 py-4 hover:bg-gold-dark transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="font-inter text-[10px] text-stone/60 mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;

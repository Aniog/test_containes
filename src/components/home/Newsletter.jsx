import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
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
    <section className="bg-charcoal py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-inter text-xs font-medium tracking-[0.25em] uppercase text-gold mb-4">
          Join the Circle
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-white tracking-wide mb-4">
          10% off your first order
        </h2>
        <p className="font-inter text-sm text-white/60 leading-relaxed mb-10">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <p className="font-cormorant text-2xl font-light italic text-gold">
              Welcome to Velmora ✦
            </p>
            <p className="font-inter text-xs text-white/60 mt-2">
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
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 font-inter text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-white font-inter text-xs tracking-[0.15em] uppercase px-7 py-4 hover:bg-goldlight transition-colors duration-300 flex items-center justify-center gap-2 flex-shrink-0"
            >
              Subscribe
              <ArrowRight size={13} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="font-inter text-[10px] text-white/30 mt-4 tracking-wide">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;

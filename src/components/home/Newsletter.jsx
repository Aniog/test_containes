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
    <section className="bg-espresso py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
          Join the Circle
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-cream tracking-wide mb-4">
          10% Off Your First Order
        </h2>
        <p className="font-inter text-sm text-cream/60 leading-relaxed mb-10">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <p className="font-cormorant text-2xl text-gold italic">
              Welcome to Velmora ✦
            </p>
            <p className="font-inter text-xs text-cream/50 mt-2">
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
              className="flex-1 bg-transparent border border-cream/20 text-cream placeholder-cream/30 font-inter text-xs px-5 py-4 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-espresso font-inter text-xs tracking-widest uppercase px-6 py-4 hover:bg-gold-light transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-3 h-3" />
            </button>
          </form>
        )}

        <p className="font-inter text-[10px] text-cream/30 mt-5 tracking-wider">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;

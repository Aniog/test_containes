import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
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
    <section className="py-20 md:py-24 bg-gold/10 border-t border-b border-gold/20">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="text-xs font-sans uppercase tracking-[0.3em] text-gold mb-4">
          Exclusive Offer
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-light mb-4">
          Join for 10% Off
        </h2>
        <p className="font-sans text-sm text-charcoal-soft leading-relaxed mb-10 max-w-md mx-auto">
          Subscribe to the Velmora edit — new arrivals, styling inspiration, and an exclusive 10% off your first order.
        </p>

        {submitted ? (
          <div className="animate-fadeIn">
            <div className="w-10 h-px bg-gold mx-auto mb-4" />
            <p className="font-serif text-xl text-charcoal font-light italic">
              Welcome to Velmora.
            </p>
            <p className="text-xs font-sans text-stone mt-2 uppercase tracking-widest">
              Your discount code is on its way.
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
              className="flex-1 bg-ivory border border-gold/30 px-5 py-4 text-sm font-sans text-charcoal placeholder:text-stone/60 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-charcoal text-ivory px-6 py-4 text-xs uppercase tracking-widest font-sans hover:bg-gold-dark transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}

        <p className="text-[10px] font-sans text-stone mt-4 uppercase tracking-wider">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;

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
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="font-inter text-xs tracking-widest uppercase text-gold mb-4">
          Join the Circle
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ivory mb-4">
          10% off your first order
        </h2>
        <p className="font-inter text-sm text-ivory/60 leading-relaxed mb-10">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-px bg-gold mx-auto" />
            <p className="font-cormorant text-2xl italic text-ivory">
              Thank you for joining us.
            </p>
            <p className="font-inter text-xs text-ivory/50">
              Your 10% discount code is on its way.
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
              className="flex-1 bg-transparent border border-ivory/30 text-ivory placeholder-ivory/40 font-inter text-xs px-5 py-4 focus:outline-none focus:border-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-gold text-ivory font-inter text-xs tracking-widest uppercase px-6 py-4 flex items-center justify-center gap-2 hover:bg-gold-dark transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={12} />
            </button>
          </form>
        )}

        <p className="font-inter text-[10px] text-ivory/30 mt-5">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}

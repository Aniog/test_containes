import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-brand-espresso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="reveal font-serif text-3xl md:text-4xl text-brand-ivory tracking-wide">
          Join for 10% Off
        </h2>
        <p className="reveal reveal-delay-1 mt-3 font-sans text-sm text-brand-muted-light tracking-wide max-w-md mx-auto">
          Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections.
        </p>
        <div className="reveal reveal-delay-1 w-12 h-px bg-brand-gold mx-auto mt-6 mb-8" />

        {submitted ? (
          <p className="reveal font-serif text-lg text-brand-gold">Welcome to Velmora. Check your inbox for your code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="reveal reveal-delay-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 bg-transparent border border-brand-charcoal-light text-brand-ivory placeholder-brand-muted-light px-4 py-3 font-sans text-sm tracking-wide focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-brand-gold text-brand-ivory px-6 py-3 font-sans text-xs tracking-super-wide uppercase font-medium hover:bg-brand-gold-light transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

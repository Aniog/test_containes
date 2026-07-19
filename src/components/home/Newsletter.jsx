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
    <section className="py-16 md:py-24 bg-brand-deep-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
            Join the Circle
          </h2>
          <p className="text-white/60 mt-3 text-sm md:text-base font-light">
            Subscribe for 10% off your first order, early access to new collections, 
            and stories from our atelier.
          </p>

          {submitted ? (
            <p className="text-brand-gold mt-6 text-sm uppercase tracking-[0.1em]">
              Thank you for joining. Check your inbox for your welcome code.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-brand-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-brand-gold text-white px-8 py-3 uppercase tracking-[0.15em] text-sm font-medium hover:bg-brand-gold-hover transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
import { useState } from 'react';

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
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-brand-charcoal rounded-sm px-6 md:px-16 py-12 md:py-16 text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-white">
            Join the Velmora World
          </h2>
          <p className="mt-3 text-sm text-white/60 font-sans">
            Subscribe for 10% off your first order, plus early access to new collections.
          </p>

          {submitted ? (
            <p className="mt-8 text-sm text-brand-gold-light font-sans">
              Thank you! Check your inbox for your welcome gift.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm font-sans rounded-sm focus:outline-none focus:border-brand-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-brand-gold text-white px-8 py-3 text-xs tracking-widest uppercase font-sans hover:bg-brand-gold-dark transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

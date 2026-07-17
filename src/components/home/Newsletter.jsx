import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-espresso">
      <div className="mx-auto max-w-[600px] px-6 text-center">
        <p className="text-[11px] tracking-[0.25em] uppercase text-gold mb-4 font-medium">
          Join Velmora
        </p>
        <h2 className="font-serif text-3xl lg:text-4xl font-light tracking-wide text-cream mb-4">
          10% off your first order
        </h2>
        <p className="text-cream/50 leading-relaxed mb-10 text-sm">
          Subscribe for exclusive early access to new collections, styling inspiration, and a welcome discount on your first purchase.
        </p>

        {submitted ? (
          <p className="text-gold text-sm font-medium tracking-wider">
            Thank you — check your inbox for your code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[440px] mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-cream/20 text-cream placeholder:text-cream/30 text-sm px-5 py-3.5 outline-none focus:border-gold transition-colors"
            />
            <button type="submit" className="btn-gold flex-shrink-0 text-xs !py-3.5 !px-8">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

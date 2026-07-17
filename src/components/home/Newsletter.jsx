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
    <section className="py-20 md:py-28 bg-brand-charcoal">
      <div className="section-padding max-w-2xl mx-auto text-center">
        <p className="font-sans text-xs tracking-[0.25em] uppercase text-brand-gold mb-4">The Velmora Edit</p>
        <h2 className="font-serif text-3xl md:text-4xl text-brand-cream tracking-hero mb-4">
          Join for 10% off your first order
        </h2>
        <p className="font-sans text-sm text-brand-cream/50 mb-8 leading-relaxed font-light">
          Sign up for early access to new collections, exclusive offers, and styling inspiration — delivered with the same care we put into every piece.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-5 py-3.5 bg-transparent border border-brand-cream/20 text-brand-cream placeholder:text-brand-cream/30 font-sans text-sm focus:outline-none focus:border-brand-gold transition-colors"
          />
          <button type="submit" className="btn-accent whitespace-nowrap">
            {submitted ? 'Thank You' : 'Sign Up'}
          </button>
        </form>

        {submitted && (
          <p className="mt-4 font-sans text-sm text-brand-gold">Welcome to the family! Check your inbox for your discount code.</p>
        )}
      </div>
    </section>
  );
}
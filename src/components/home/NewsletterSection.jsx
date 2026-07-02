import { useState } from 'react';

export default function NewsletterSection() {
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
    <section className="py-16 md:py-20 bg-charcoal-900">
      <div className="section-padding text-center">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-brand-gold-light mb-3">
          Stay in Touch
        </p>
        <h2 className="font-serif text-2xl md:text-heading text-white tracking-[0.04em] mb-3">
          Join for 10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-charcoal-400 mb-8 max-w-md mx-auto">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-sans text-sm text-brand-gold-light tracking-wide">
              Thank you! Your welcome code is on its way.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 w-full sm:w-auto px-5 py-3.5 bg-charcoal-800 border border-charcoal-700 text-white placeholder:text-charcoal-500 font-sans text-sm tracking-wide focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button
              type="submit"
              className="btn-gold text-xs w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

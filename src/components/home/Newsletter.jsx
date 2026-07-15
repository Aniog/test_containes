import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-velmora-blush-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-espresso font-medium">
          Join for 10% off your first order
        </h2>
        <p className="mt-3 text-sm md:text-base text-velmora-stone max-w-md mx-auto">
          Sign up for early access to new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-lg text-velmora-gold-dark italic">
            Thank you — your discount code is on its way.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full sm:flex-1 px-5 py-3.5 bg-white border border-velmora-sand text-sm text-velmora-espresso placeholder:text-velmora-stone-light focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap w-full sm:w-auto">
              Sign Up
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-velmora-stone/70">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}

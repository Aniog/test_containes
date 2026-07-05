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
    <section className="py-20 lg:py-28 bg-velmora-cream">
      <div className="max-w-xl mx-auto px-5 text-center">
        <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-velmora-taupe mb-3">
          Join Velmora
        </p>
        <h2 className="font-serif text-3xl lg:text-4xl text-velmora-espresso font-medium mb-4">
          Receive 10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-velmora-stone mb-8 leading-relaxed">
          Sign up for early access to new collections, exclusive offers, and styling inspiration from the world of Velmora.
        </p>

        {submitted ? (
          <p className="font-serif text-lg text-velmora-gold italic">
            Thank you — your code has been sent to your inbox.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 bg-white border border-black/5 text-sm font-sans text-velmora-espresso placeholder:text-velmora-sand focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button type="submit" className="btn-primary flex-shrink-0">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

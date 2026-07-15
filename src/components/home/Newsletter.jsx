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
    <section className="section-padding py-20 md:py-28">
      <div className="max-w-xl mx-auto text-center bg-velmora-sand py-16 px-8 md:px-16">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-charcoal">
          Join for 10% off your first order
        </h2>
        <p className="font-sans text-sm text-velmora-stone mt-4 leading-relaxed">
          Subscribe to receive early access to new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <p className="font-serif text-lg text-velmora-gold mt-8 italic">
            Thank you — check your inbox for your discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mt-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-white border border-velmora-pearl px-5 py-3.5 font-sans text-sm text-velmora-charcoal placeholder:text-velmora-stone focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
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
    <section className="bg-velmora-charcoal py-16 sm:py-20 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-velmora-cream tracking-wide mb-3">
          Join for 10% Off Your First Order
        </h2>
        <div className="w-12 h-px bg-velmora-gold mx-auto mb-4" />
        <p className="text-sm text-velmora-sand mb-8 leading-relaxed">
          Be the first to discover new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="bg-velmora-espresso/50 border border-velmora-gold/30 rounded-sm px-6 py-4">
            <p className="font-serif text-lg text-velmora-gold">Welcome to Velmora</p>
            <p className="text-sm text-velmora-sand mt-1">Check your inbox for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-velmora-espresso border border-velmora-warm-brown/40 text-velmora-cream placeholder:text-velmora-taupe px-4 py-3.5 text-sm focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-velmora-white px-8 py-3.5 text-sm tracking-[0.2em] uppercase font-medium hover:bg-velmora-gold-light transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

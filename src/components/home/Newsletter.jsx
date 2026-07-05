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
    <section className="py-20 md:py-28 bg-velmora-surface">
      <div className="max-w-[600px] mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white tracking-widetitle font-semibold">
          Join for 10% Off
        </h2>
        <p className="font-sans text-sm text-white/60 mt-4 leading-relaxed">
          Sign up for our newsletter and receive 10% off your first order. Stay in the loop on new
          arrivals, exclusive offers, and style inspiration.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 px-5 py-3.5 bg-transparent border border-white/20 text-white placeholder:text-white/40 font-sans text-sm focus:outline-none focus:border-velmora-gold transition-colors"
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            {submitted ? 'Thank You!' : 'Get 10% Off'}
          </button>
        </form>

        {submitted && (
          <p className="font-sans text-sm text-velmora-gold mt-4 animate-fade-in">
            Check your inbox — your discount code is on its way.
          </p>
        )}
      </div>
    </section>
  );
}

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
    <section className="section-dark py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
          Join the Velmora World
        </h2>
        <p className="text-white/60 text-sm mt-3 tracking-wide">
          Subscribe for 10% off your first order, plus early access to new collections.
        </p>

        {submitted ? (
          <p className="mt-8 text-gold text-sm tracking-wide">
            Thank you for subscribing. Welcome to Velmora.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="btn-gold px-6 py-3 text-sm uppercase tracking-widest font-medium transition-colors duration-300 border-none cursor-pointer whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

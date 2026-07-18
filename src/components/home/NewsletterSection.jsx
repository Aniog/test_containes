import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="bg-[#1a1612] text-white py-20 lg:py-24">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="font-serif text-2xl md:text-3xl tracking-wider">
          Join the Circle
        </h2>
        <p className="mt-3 text-sm text-white/60">
          Enjoy 10% off your first order when you sign up.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 bg-transparent border border-white/20 text-white placeholder:text-white/40 px-5 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
          />
          <button
            type="submit"
            className="bg-accent text-white px-8 py-3 text-xs tracking-[0.12em] uppercase font-medium hover:bg-warm-600 transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-4 text-xs text-white/30">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

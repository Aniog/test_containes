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
    <section className="py-16 md:py-20 bg-accent">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-accent-fg mb-3">
          Join the Velmora Circle
        </h2>
        <p className="text-accent-fg/80 text-sm md:text-base mb-8 tracking-wide">
          {submitted
            ? 'Thank you — welcome to the circle.'
            : 'Subscribe for 10% off your first order, plus early access to new collections and styling inspiration.'}
        </p>

        {!submitted && (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-white/95 text-fg text-sm placeholder:text-muted-fg focus:outline-none focus:ring-2 focus:ring-accent-fg/30"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#1a1412] text-white text-xs font-medium tracking-[0.15em] uppercase hover:bg-[#2a2420] transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

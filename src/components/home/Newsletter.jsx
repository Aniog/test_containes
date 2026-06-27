import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-16 md:py-20 bg-velmora-accent">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-white">
          Join the Inner Circle
        </h2>
        <p className="text-white/80 text-sm mt-3">
          Subscribe for 10% off your first order, early access to new drops, and styling tips.
        </p>

        {submitted ? (
          <p className="mt-8 text-white font-medium text-sm tracking-wide">
            Thank you! Check your inbox for your welcome gift.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border border-white/25 text-white placeholder:text-white/50 text-sm px-4 py-3 outline-none focus:border-white/50 transition-colors"
            />
            <button
              type="submit"
              className="bg-white text-velmora-accent text-xs tracking-[0.2em] uppercase font-medium px-8 py-3 hover:bg-white/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

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
    <section className="py-20 md:py-28 bg-text-primary">
      <div className="max-w-2xl mx-auto px-6 lg:px-10 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-wide text-white">
          Join for 10% off your first order
        </h2>
        <p className="text-white/50 text-sm mt-3 max-w-md mx-auto">
          Be the first to know about new collections, exclusive offers, and the stories behind the pieces.
        </p>

        {submitted ? (
          <p className="mt-8 text-white/80 text-sm font-medium">
            Thank you! Check your inbox for your welcome discount.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap text-sm">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

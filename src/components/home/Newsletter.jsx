import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="bg-gold py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl text-white md:text-4xl">
          Join for 10% Off Your First Order
        </h2>
        <p className="mt-3 text-sm text-white/80">
          Be the first to know about new collections, limited editions, and styling notes.
        </p>

        {submitted ? (
          <div className="mt-8 inline-flex items-center gap-2 rounded-sm bg-white/15 px-6 py-4 text-white">
            <Check size={18} />
            <span className="text-sm font-medium">Thank you. Your code is on its way.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-sm border border-white/30 bg-white/10 px-5 py-4 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none sm:w-80"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-white px-8 py-4 text-sm font-medium uppercase tracking-widest text-gold transition-colors duration-300 hover:bg-cream"
            >
              Subscribe
              <ArrowRight size={16} strokeWidth={2} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
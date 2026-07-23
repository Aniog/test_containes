import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-16 md:py-24 bg-accent">
      <div className="max-w-container mx-auto px-6 md:px-12 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white font-normal">
          Join the Inner Circle
        </h2>
        <p className="mt-3 font-sans text-sm text-white/85 max-w-md mx-auto">
          Subscribe for 10% off your first order, early access to new collections,
          and styling inspiration delivered to your inbox.
        </p>
        {submitted ? (
          <p className="mt-8 font-sans text-sm text-white">
            Welcome to Velmora. Check your inbox for your exclusive code.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:flex-1 bg-white/10 border border-white/30 text-white placeholder-white/60 py-3 px-4 font-sans text-sm focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-white text-accent py-3 px-6 uppercase text-xs font-sans font-medium tracking-label flex items-center justify-center gap-2 hover:bg-surface transition-colors"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

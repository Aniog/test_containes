import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export function Newsletter() {
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
    <section className="bg-gold py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="heading-md mb-4 text-ink">Join for 10% Off Your First Order</h2>
        <p className="mb-8 text-ink/80">
          Be the first to know about new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-ink">
            <Check size={20} />
            <span className="font-medium">Welcome to Velmora — check your inbox for your code.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-b-2 border-ink/30 bg-transparent px-4 py-3 text-ink placeholder:text-ink/50 focus:border-ink focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-ink px-8 py-3 text-sm font-medium uppercase tracking-wide text-cream transition-colors hover:bg-ink/90"
            >
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

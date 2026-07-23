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
    <section className="py-16 md:py-24 bg-gold-600 text-white">
      <div className="mx-auto px-5 md:px-8 lg:px-12 max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] font-medium mb-3 opacity-90">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
          10% Off Your First Order
        </h2>
        <p className="text-sm md:text-base opacity-90 mb-8 max-w-lg mx-auto">
          Be the first to know about new drops, styling notes, and members-only exclusives.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <Check className="w-4 h-4" strokeWidth={2} />
            Welcome to Velmora — your code is on its way.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border border-white/30 placeholder:text-white/70 text-white px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="bg-white text-gold-700 px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 hover:bg-cream transition-colors"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" strokeWidth={1.6} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

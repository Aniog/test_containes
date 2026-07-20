import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
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
    <section id="journal" className="relative py-20 md:py-28 bg-base overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-accent/30" />

      <div className="container-wide mx-auto px-4 md:px-8 text-center relative z-10">
        <span className="text-accent text-xs font-medium tracking-wider uppercase mb-4 block">
          Stay in Touch
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-text-light mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-stone-400 text-sm max-w-md mx-auto mb-8">
          Be the first to discover new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="text-accent font-serif text-lg">Welcome to the Velmora family.</p>
            <p className="text-stone-400 text-sm mt-2">Check your inbox for your exclusive code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3 bg-stone-800 border border-stone-700 rounded text-sm text-text-light placeholder:text-stone-500 focus:outline-none focus:border-accent transition-colors"
            />
            <button type="submit" className="btn-primary flex items-center justify-center gap-2 text-sm">
              <Send size={14} />
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

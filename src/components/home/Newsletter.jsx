import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
    <section className="py-20 md:py-28 bg-velmora-dark">
      <div className="max-w-2xl mx-auto px-6 md:px-8 text-center">
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-velmora-accent mb-4">Stay Connected</p>
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-white/60 mb-8 max-w-md mx-auto leading-relaxed">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration delivered to your inbox.
        </p>

        {submitted ? (
          <div className="text-white/90 font-sans text-sm">
            <p className="mb-2">Thank you for subscribing!</p>
            <p className="text-white/50 text-xs">Your welcome code is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-transparent border-b border-white/30 text-white placeholder-white/40 px-0 py-3 text-sm font-sans focus:outline-none focus:border-velmora-accent transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-accent text-white px-6 py-3 text-xs uppercase tracking-widest font-sans font-medium hover:bg-velmora-accent-dark transition-colors flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

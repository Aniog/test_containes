import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section className="py-16 lg:py-24 bg-gold-500/10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gold-600 text-xs tracking-widest uppercase font-medium mb-3">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 font-light mb-4">
          Become a Velmora Insider
        </h2>
        <p className="text-ink-500 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
          Subscribe for 10% off your first order, early access to new collections, and curated styling stories.
        </p>

        <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-5 py-3.5 bg-white border border-cream-300 text-ink-900 text-sm placeholder:text-ink-300 focus:outline-none focus:border-gold-400 transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-3.5 bg-ink-900 text-cream-50 text-xs tracking-widest uppercase font-medium hover:bg-ink-800 transition-colors flex items-center gap-2"
          >
            Subscribe
            <ArrowRight className="w-3 h-3" />
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm text-gold-700 font-medium animate-fade-in">
            Thank you! Check your inbox for your welcome offer.
          </p>
        )}
      </div>
    </section>
  );
}
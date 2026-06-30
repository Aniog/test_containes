import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
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
    <section className="py-16 md:py-24 bg-accent">
      <div className="max-w-2xl mx-auto px-6 text-center text-white">
        <h2 className="font-serif text-2xl md:text-3xl font-light tracking-wide">
          Join the Inner Circle
        </h2>
        <p className="text-sm md:text-base mt-3 opacity-90">
          Subscribe for 10% off your first order, early access to new arrivals, and
          styling inspiration.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3.5 bg-white/15 border border-white/30 text-white placeholder-white/60 text-sm focus:outline-none focus:border-white transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-3.5 bg-white text-accent text-xs uppercase tracking-[0.15em] font-medium hover:bg-surface transition-colors flex items-center justify-center gap-2"
          >
            Subscribe
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
        {status === 'success' && (
          <p className="text-sm mt-4 opacity-90">
            Welcome! Check your inbox for your exclusive code.
          </p>
        )}
      </div>
    </section>
  );
}

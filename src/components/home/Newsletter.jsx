import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="py-16 md:py-24 bg-brand-800">
      <FadeIn>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-white tracking-wide">
            Join the Inner Circle
          </h2>
          <p className="mt-3 text-sm text-white/80">
            Subscribe for 10% off your first order, early access to new collections, and styling notes.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/50 px-4 py-3 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-white/40"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-900 px-6 py-3 text-xs font-semibold tracking-[0.15em] uppercase rounded-sm hover:bg-ink-100 transition-colors"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
          {status === 'success' && (
            <p className="mt-4 text-xs text-white/90">Thank you. Check your inbox for your code.</p>
          )}
        </div>
      </FadeIn>
    </section>
  );
}

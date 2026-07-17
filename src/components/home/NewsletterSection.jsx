import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 800);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-4 h-4 text-ink-950/60" />
          <span className="text-ink-950/70 text-xs uppercase tracking-widestplus font-medium">
            Insider Access
          </span>
          <Sparkles className="w-4 h-4 text-ink-950/60" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl text-ink-950 font-light tracking-wide">
          Join for <span className="font-semibold">10% off</span> your first order
        </h2>
        <p className="mt-3 text-ink-900/70 text-sm sm:text-base max-w-md mx-auto font-light">
          Be the first to know about new collections, exclusive drops, and behind-the-scenes stories.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
          <div className="w-full sm:flex-1 relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3.5 bg-cream-50/90 border border-cream-50/50 text-ink-900 text-sm placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-ink-950/20 focus:border-transparent transition-all rounded-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'submitting' || status === 'success'}
            className="w-full sm:w-auto px-6 py-3.5 bg-ink-950 text-cream-50 text-xs uppercase tracking-widestplus font-medium hover:bg-ink-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 rounded-none whitespace-nowrap"
          >
            {status === 'success' ? 'Subscribed!' : status === 'submitting' ? 'Sending...' : 'Subscribe'}
            {status === 'idle' && <ArrowRight className="w-3 h-3" />}
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-ink-950/80 text-sm">Welcome to Velmora! Check your inbox for your 10% off code.</p>
        )}
      </div>
    </section>
  );
}
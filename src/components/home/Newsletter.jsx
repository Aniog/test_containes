import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section className="py-20 md:py-28 bg-velmora-gold">
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">
          Join for 10% Off
        </h2>
        <p className="text-white/90 mb-8 md:text-lg">
          Subscribe for early access to new collections, styling tips, and a
          welcome gift on your first order.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-5 py-4 bg-white/10 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:border-white focus:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-velmora-gold transition-colors"
          />
          <button
            type="submit"
            className="px-7 py-4 bg-white text-velmora-gold font-medium uppercase tracking-[0.1em] hover:bg-velmora-cream transition-colors flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-velmora-gold"
          >
            Subscribe
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-white text-sm" role="status">
            Thank you. Your welcome code is on its way.
          </p>
        )}
      </div>
    </section>
  );
}

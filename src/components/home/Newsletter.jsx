import { useState } from 'react';
import { toast } from 'sonner';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Welcome to Velmora! Check your inbox for 10% off.');
      setEmail('');
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[var(--velmora-dark)] text-[var(--velmora-cream)]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-accent-light)] mb-3">Join the Circle</p>
        <h2 className="velmora-heading text-3xl sm:text-4xl mb-4">10% Off Your First Order</h2>
        <p className="text-sm text-[var(--velmora-text-muted)] mb-8">
          Subscribe for early access to new collections, styling tips, and exclusive offers.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[var(--velmora-accent)] transition-colors"
            required
          />
          <button type="submit" className="velmora-btn-primary whitespace-nowrap">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

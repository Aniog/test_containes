import { useState } from 'react';
import { toast } from 'sonner';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Welcome to Velmora! Check your inbox for 10% off.');
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-20 bg-[var(--velmora-bg-dark)] text-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="velmora-heading text-3xl md:text-4xl mb-3">Join the Velmora Circle</h2>
        <div className="velmora-divider-thin w-16 mx-auto mb-4 opacity-50" />
        <p className="text-sm text-white/70 mb-8">
          Subscribe for exclusive access to new collections, styling tips, and 10% off your first order.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[var(--velmora-warm)] transition-colors"
            required
          />
          <button type="submit" className="velmora-btn-accent whitespace-nowrap">
            Get 10% Off
          </button>
        </form>
      </div>
    </section>
  );
}

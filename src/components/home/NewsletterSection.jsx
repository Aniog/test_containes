import { useState } from 'react';
import { toast } from 'sonner';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Welcome to Velmora! Check your inbox for 10% off.');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 md:py-28 bg-[var(--velmora-gold)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          Join the Velmora World
        </h2>
        <p className="text-white/90 mb-8 max-w-xl mx-auto">
          Subscribe for 10% off your first order, exclusive access to new collections, and styling inspiration delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-6 py-4 bg-white/10 border border-white/30 rounded text-white placeholder:text-white/60 focus:outline-none focus:bg-white/20 transition-colors"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-4 bg-[var(--velmora-charcoal)] text-white text-sm tracking-wider uppercase rounded hover:bg-black transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Joining...' : 'Join'}
          </button>
        </form>

        <p className="text-xs text-white/60 mt-4">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

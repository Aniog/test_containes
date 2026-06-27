import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');
  };

  return (
    <section className="py-20 bg-[var(--color-gold)]">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-espresso)] rounded-full mb-6">
            <Mail className="w-8 h-8 text-[var(--color-gold)]" />
          </div>

          {/* Headline */}
          <h2 className="heading-3 text-[var(--color-espresso)] mb-3">
            Join the Velmora Circle
          </h2>

          {/* Subtext */}
          <p className="body-md text-[var(--color-espresso)]/80 mb-8">
            Be the first to know about new collections, exclusive offers, and styling inspiration. 
            Plus, receive 10% off your first order.
          </p>

          {/* Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-3 bg-white border border-[var(--color-gold-deep)] rounded text-[var(--color-charcoal)] placeholder:text-[var(--color-warm-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--color-espresso)]"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-3 bg-[var(--color-espresso)] text-[var(--color-cream)] font-medium text-sm tracking-[0.1em] uppercase rounded hover:bg-[var(--color-charcoal)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Joining...' : 'Get 10% Off'}
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 text-[var(--color-espresso)]">
              <Check className="w-5 h-5" />
              <p className="font-medium">Welcome to the Velmora Circle!</p>
            </div>
          )}

          {/* Privacy Note */}
          <p className="text-xs text-[var(--color-espresso)]/60 mt-4">
            By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

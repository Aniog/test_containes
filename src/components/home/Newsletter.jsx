import { useState } from 'react';
import { Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');
  };

  return (
    <section className="py-20 md:py-24 bg-[var(--color-gold)]">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center text-white">
          {isSubmitted ? (
            <div className="animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mb-4">
                Welcome to Velmora
              </h3>
              <p className="text-white/80">
                Check your inbox for your 10% off code. We can't wait to share our jewelry with you.
              </p>
            </div>
          ) : (
            <>
              <p className="text-xs uppercase tracking-[0.3em] mb-4 opacity-80">
                Stay Connected
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-4">
                Join for 10% off your first order
              </h2>
              <p className="text-white/80 mb-8">
                Be the first to know about new collections, exclusive offers, and styling inspiration.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-3 bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-3 bg-[var(--color-charcoal)] text-white text-sm uppercase tracking-wider hover:bg-[var(--color-charcoal-light)] transition-colors disabled:opacity-50"
                >
                  {isLoading ? 'Joining...' : 'Subscribe'}
                </button>
              </form>

              <p className="text-xs mt-4 text-white/60">
                By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

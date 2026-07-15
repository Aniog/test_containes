import { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 md:py-28 bg-gold">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {isSubmitted ? (
          <div className="animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">
              Welcome to Velmora
            </h3>
            <p className="font-sans text-white/80">
              Check your inbox for your 10% off code. We can't wait to have you!
            </p>
          </div>
        ) : (
          <>
            <Mail className="w-10 h-10 text-white/60 mx-auto mb-6" />
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
              Join the Velmora Family
            </h2>
            <p className="font-sans text-white/80 mb-8 max-w-md mx-auto">
              Subscribe for exclusive access to new collections, special offers, 
              and style inspiration. Plus, enjoy 10% off your first order.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50 font-sans text-sm focus:outline-none focus:border-white transition-colors"
              />
              <Button
                type="submit"
                variant="secondary"
                className="bg-white text-gold hover:bg-ivory whitespace-nowrap"
                disabled={isLoading}
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>

            <p className="font-sans text-xs text-white/50 mt-4">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Button } from '@/components/ui';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-brand-bg-primary to-brand-bg-secondary">
      <div className="container-main">
        <div className="max-w-2xl mx-auto text-center px-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full mb-6">
            <span className="text-brand-gold text-sm">✦</span>
            <span className="text-brand-gold text-xs font-medium uppercase tracking-wider">
              Join the Club
            </span>
          </div>

          <h2 className="serif-heading text-3xl md:text-4xl text-brand-text-primary">
            Elevate Your Inbox
          </h2>
          <p className="mt-4 text-brand-text-secondary max-w-md mx-auto">
            Subscribe for exclusive access to new collections, styling tips, 
            and 10% off your first order.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-3.5 bg-brand-bg-elevated border border-brand-border-subtle text-brand-text-primary placeholder:text-brand-text-tertiary focus:outline-none focus:border-brand-gold transition-colors rounded-sm"
                />
                <Button type="submit" loading={isLoading}>
                  Subscribe
                </Button>
              </div>
              <p className="mt-4 text-xs text-brand-text-tertiary">
                By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
              </p>
            </form>
          ) : (
            <div className="mt-8 p-6 bg-brand-success/10 border border-brand-success/30 rounded-sm">
              <p className="text-brand-success font-medium">
                Welcome to the Velmora family!
              </p>
              <p className="mt-2 text-sm text-brand-text-secondary">
                Check your inbox for your 10% off code.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

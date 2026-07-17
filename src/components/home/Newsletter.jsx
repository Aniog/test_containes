import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-section-mobile md:py-section bg-gold">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-background mb-4">
            Join for 10% Off
          </h2>
          <p className="text-background/80 mb-8">
            Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections and exclusive offers.
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-2 text-background">
              <Check className="w-5 h-5" />
              <span className="font-medium">Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background text-background placeholder:text-background/50 border border-background/20 focus:outline-none focus:border-background"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-background text-gold uppercase tracking-widest text-sm font-medium hover:bg-background/90 transition-colors flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <p className="text-background/60 text-xs mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // In real app, would send to backend
    }
  };

  return (
    <section className="py-16 md:py-24 bg-charcoal-800 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Join the Velmora Circle
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Subscribe to receive exclusive offers, styling tips, and early access to new collections. Plus, enjoy 10% off your first order.
          </p>

          {isSubmitted ? (
            <div className="bg-gold-500/20 border border-gold-400 rounded-sm p-6">
              <p className="text-gold-300 font-medium">
                Welcome to the circle! Check your email for your 10% discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 transition-colors"
                  />
                </div>
                <Button type="submit" variant="gold" size="lg" className="whitespace-nowrap">
                  Subscribe & Save
                </Button>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
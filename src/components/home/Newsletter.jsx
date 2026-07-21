import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-deep-warm py-16 md:py-20">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-white uppercase tracking-wider">
            Join the Circle
          </h2>
          <p className="text-white/60 text-sm mt-3 leading-relaxed">
            Be the first to discover new collections, exclusive previews, and receive 
            <span className="text-accent font-medium"> 10% off your first order</span>.
          </p>

          {submitted ? (
            <p className="text-accent text-sm mt-8">
              Thank you! Check your inbox for your welcome offer.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 h-12 px-5 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <Button type="submit" className="flex-shrink-0">
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
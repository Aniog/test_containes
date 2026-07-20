import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Welcome to Velmora! Check your inbox for 10% off.');
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-brand-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Join for 10% off your first order
          </h2>
          <p className="text-white/70 mb-8">
            Be the first to know about new arrivals, exclusive offers, and styling inspiration.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 h-12 px-5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-colors"
            />
            <button type="submit" className="btn-primary px-8">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>
          <p className="text-xs text-white/50 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

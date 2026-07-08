import React, { useState } from 'react';
import { toast } from 'sonner';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    setSubmitted(true);
    toast.success('Welcome to Velmora — enjoy 10% off your first order!');
  };

  return (
    <section className="py-20 lg:py-28 bg-charcoal">
      <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
          10% Off Your First Order
        </h2>
        <p className="text-warmgray text-sm mb-10 max-w-md mx-auto">
          Be the first to know about new collections, exclusive offers, and
          styling inspiration from Velmora.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 py-4">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
              <Check className="w-5 h-5 text-gold" />
            </div>
            <span className="text-cream font-medium">
              Thank you — check your inbox for your code.
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 bg-cream/10 border border-warmgray/30 text-cream placeholder:text-warmgray/60 text-sm focus:outline-none focus:border-gold transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-gold text-charcoal text-xs uppercase tracking-[0.2em] font-semibold hover:bg-goldlight transition-colors flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="text-warmgray/50 text-xs mt-6">
          By subscribing, you agree to receive marketing emails from Velmora.
        </p>
      </div>
    </section>
  );
}

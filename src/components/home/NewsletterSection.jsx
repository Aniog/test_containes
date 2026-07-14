import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gold p-8 sm:p-12 lg:p-16 text-center">
          {submitted ? (
            <div className="animate-fade-up">
              <Check className="w-10 h-10 text-white mx-auto mb-4" />
              <h3 className="font-cormorant text-2xl sm:text-3xl text-white uppercase tracking-wider">
                You're In!
              </h3>
              <p className="text-white/80 text-sm mt-2 max-w-md mx-auto">
                Welcome to the Velmora family. Check your inbox for your 10% discount code.
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-wider leading-tight">
                Join for 10% Off
              </h3>
              <p className="text-white/80 text-sm mt-3 max-w-md mx-auto">
                Be the first to know about new collections, exclusive launches, and
                early access. Plus, enjoy 10% off your first order.
              </p>
              <form
                onSubmit={handleSubmit}
                className="mt-6 max-w-md mx-auto flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-3 bg-white/15 text-white placeholder:text-white/50 text-sm border border-white/30 focus:outline-none focus:border-white transition-colors"
                />
                <button
                  type="submit"
                  className="bg-charcoal text-cream uppercase tracking-widest text-xs px-8 py-3 hover:bg-charcoal/90 transition-colors flex items-center justify-center gap-2"
                >
                  Subscribe
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
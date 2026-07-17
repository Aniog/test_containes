import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-16 md:py-24 bg-espresso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Decorative element */}
          <div className="w-12 h-px bg-gold-400 mx-auto mb-8" />

          <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-4">
            Join the Velmora Circle
          </h2>
          
          <p className="text-ivory/70 font-body mb-8 max-w-md mx-auto">
            Subscribe for 10% off your first order, exclusive access to new collections, and styling inspiration.
          </p>

          {status === 'success' ? (
            <div className="bg-gold-500/20 border border-gold-500/30 rounded-lg p-6">
              <p className="text-ivory font-serif text-lg">
                Welcome to the circle!
              </p>
              <p className="text-ivory/70 text-sm mt-2">
                Check your inbox for your 10% discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 bg-transparent border border-ivory/20 text-ivory placeholder:text-ivory/40 font-body text-sm focus:outline-none focus:border-gold-400 transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-3.5 bg-gold-500 text-charcoal font-body font-medium text-sm tracking-wide hover:bg-gold-400 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  'Joining...'
                ) : (
                  <>
                    Get 10% Off
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          <p className="text-ivory/40 text-xs mt-6">
            By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

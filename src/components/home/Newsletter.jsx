import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    // Simulate submission
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 800);
  };

  return (
    <section className="bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-24">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gold text-xs uppercase tracking-[0.2em] font-sans font-semibold mb-3">
            Newsletter
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-cream-50 mb-3">
            Join the Inner Circle
          </h2>
          <p className="text-cream-50/60 font-sans text-base mb-8">
            Subscribe for 10% off your first order and early access to new collections.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-5 py-3.5 bg-charcoal-800 border border-charcoal-700 text-cream-50 placeholder:text-charcoal-500 font-sans text-sm focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="bg-gold text-charcoal-900 px-8 py-3.5 font-sans text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-gold-light disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {status === 'submitting' ? (
                'Sending...'
              ) : (
                <>
                  Subscribe <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-gold-light text-sm font-sans">
              Thanks! Check your inbox for your 10% off code.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
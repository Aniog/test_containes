import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

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
    <section className="py-16 md:py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-cream">
            Join for 10% Off
          </h2>
          <p className="mt-4 text-stone-400">
            Subscribe to our newsletter and receive 10% off your first order. 
            Plus, be the first to know about new collections and exclusive offers.
          </p>

          {status === 'success' ? (
            <div className="mt-6 p-4 bg-gold/10 border border-gold/30">
              <p className="text-gold">Thank you for subscribing! Check your email for your discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-transparent border border-stone-600 text-cream placeholder-stone-500 focus:outline-none focus:border-gold transition-colors"
                  required
                />
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-8 py-4 bg-gold text-charcoal font-medium hover:bg-gold-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              <p className="mt-3 text-xs text-stone-500">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
import React, { useState } from 'react';

const NewsletterSection = () => {
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
    <section className="py-20 md:py-28 bg-gold">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Join the Velmora World
          </h2>
          <p className="text-white/80 mb-8">
            Subscribe for 10% off your first order, plus exclusive previews and styling inspiration.
          </p>

          {status === 'success' ? (
            <div className="animate-fade-in">
              <div className="bg-white/20 py-4 px-6 inline-block">
                <p className="text-white font-medium">
                  Welcome to Velmora! Check your inbox for your 10% off code.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-4 bg-white text-charcoal placeholder:text-charcoal-light focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-4 bg-charcoal text-white text-sm font-medium uppercase tracking-wider hover:bg-charcoal-light transition-colors disabled:opacity-70"
              >
                {status === 'loading' ? 'Joining...' : 'Get 10% Off'}
              </button>
            </form>
          )}

          <p className="text-xs text-white/60 mt-6">
            By subscribing, you agree to receive marketing emails from Velmora.
            Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

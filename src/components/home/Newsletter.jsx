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
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className="py-16 md:py-20 bg-[#C9A962]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-4">
            Join the Velmora World
          </h2>
          <p className="text-[#1A1A1A]/70 mb-8">
            Subscribe for 10% off your first order, plus exclusive access to new 
            arrivals, styling tips, and more.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-white/90 rounded-sm text-[#1A1A1A] placeholder:text-[#8B8178] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]/20"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-3 bg-[#1A1A1A] text-[#FAF7F2] text-sm uppercase tracking-wider rounded-sm hover:bg-[#2a2a2a] transition-colors disabled:opacity-70"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {/* Success Message */}
          {status === 'success' && (
            <p className="mt-4 text-sm text-[#1A1A1A] animate-fade-in">
              Thank you for subscribing! Check your inbox for your 10% off code.
            </p>
          )}

          {/* Privacy Note */}
          <p className="mt-4 text-xs text-[#1A1A1A]/60">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

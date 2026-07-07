import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-serif mb-6">Join the Insider Circle</h2>
        <p className="text-primary-foreground/90 font-light mb-10 text-lg">
          Sign up for early access to new collections, exclusive editorial content, and receive 10% off your first order.
        </p>
        
        {status === 'success' ? (
          <div className="bg-white/10 p-6 border border-white/20">
            <p className="font-serif italic text-xl">Thank you for subscribing. Check your inbox for your welcome gift.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow bg-transparent border-b border-white/30 text-white placeholder:text-white/60 px-2 py-3 focus:outline-none focus:border-white transition-colors uppercase text-sm tracking-wide"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit"
              disabled={status === 'submitting'}
              className="bg-white text-primary px-8 py-3 uppercase tracking-widest text-sm font-medium hover:bg-transparent hover:text-white hover:border-white border border-white transition-colors disabled:opacity-50 mt-4 sm:mt-0 shrink-0"
            >
              {status === 'submitting' ? 'Joining...' : 'Subscribe'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;

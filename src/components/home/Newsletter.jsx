import React, { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-32 bg-[#453c38] text-white">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-6 text-white">Join The Insider List</h2>
        <p className="text-[#d6d3d1] mb-10 max-w-lg mx-auto leading-relaxed">
          Sign up to receive 10% off your first order, plus early access to new collections and exclusive events.
        </p>
        
        {status === 'success' ? (
          <div className="bg-white/10 p-6 rounded text-white border border-white/20">
            <p className="font-serif text-xl mb-2">Welcome to Velmora.</p>
            <p className="text-sm text-white/80">Check your email for your 10% off code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto gap-4 sm:gap-0">
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border border-white/30 px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors uppercase text-sm tracking-wide"
            />
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="bg-white text-[#453c38] px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-[#faf9f6] transition-colors disabled:opacity-70"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

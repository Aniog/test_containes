import { useState } from 'react';

export default function Newsletter() {
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
    <section className="py-20 bg-velmora-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl text-white">Join for 10% Off</h2>
        <p className="mt-3 text-white/80 max-w-md mx-auto">
          Subscribe to our newsletter and receive 10% off your first order, plus exclusive access to new collections and private sales.
        </p>
        
        {status === 'success' ? (
          <div className="mt-8 p-4 bg-white/10 text-white">
            Thank you for subscribing! Check your email for your discount code.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white"
              required
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="px-8 py-3 bg-white text-velmora-gold font-medium uppercase tracking-widest text-sm hover:bg-velmora-cream transition-colors disabled:opacity-50"
            >
              {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}
        
        <p className="mt-4 text-xs text-white/60">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
        </p>
      </div>
    </section>
  );
}
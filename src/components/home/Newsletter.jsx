import { useState } from 'react';

export default function Newsletter() {
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
    <section className="py-20 md:py-28 bg-velmora-charcoal">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-cream">
          Join the Velmora Circle
        </h2>
        <p className="mt-4 text-velmora-cream/60 max-w-md mx-auto">
          Subscribe to our newsletter and receive 10% off your first order, 
          plus early access to new collections and exclusive offers.
        </p>

        {status === 'success' ? (
          <div className="mt-8 p-4 bg-velmora-gold/20 border border-velmora-gold/30">
            <p className="text-velmora-gold font-sans tracking-wider">
              Thank you for subscribing! Check your email for your discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-transparent border border-velmora-cream/30 text-velmora-cream placeholder:text-velmora-cream/40 focus:border-velmora-gold focus:outline-none transition-colors duration-300"
              required
            />
            <button 
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-3 bg-velmora-gold text-velmora-charcoal font-sans text-sm tracking-widest uppercase hover:bg-velmora-goldLight transition-colors duration-300 disabled:opacity-50"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-velmora-cream/40">
          By subscribing, you agree to our Privacy Policy and consent to receive updates.
        </p>
      </div>
    </section>
  );
}
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
    <section className="py-20 bg-velmora-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-white">Join for 10% Off</h2>
          <p className="mt-4 text-white/80">
            Subscribe to our newsletter and receive 10% off your first order. 
            Be the first to know about new collections and exclusive offers.
          </p>

          {status === 'success' ? (
            <div className="mt-6 p-4 bg-white/10 text-white">
              Thank you for subscribing! Check your email for your discount code.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-8 py-4 bg-white text-velmora-gold font-sans text-sm tracking-wider hover:bg-velmora-cream transition-colors duration-300 disabled:opacity-70"
                >
                  {status === 'loading' ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
                </button>
              </div>
              <p className="mt-3 text-xs text-white/60">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
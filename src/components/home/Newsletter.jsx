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
    <section className="py-section-mobile md:py-section bg-velmora-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-section text-white mb-3">
            Join the Velmora Circle
          </h2>
          <p className="text-white/80 mb-6">
            Subscribe and receive 10% off your first order, plus early access to new collections and exclusive offers.
          </p>
          
          {status === 'success' ? (
            <div className="bg-white/10 backdrop-blur-sm py-4 px-6">
              <p className="text-white font-medium">Thank you for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors"
                required
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-6 py-3 bg-white text-velmora-accent font-medium hover:bg-white/90 transition-colors disabled:opacity-70"
              >
                {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}
          
          <p className="text-white/60 text-xs mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
          </p>
        </div>
      </div>
    </section>
  );
}
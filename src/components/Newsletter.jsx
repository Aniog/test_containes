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
    <section 
      className="py-20 md:py-28"
      style={{ backgroundColor: 'var(--color-velmora-charcoal)' }}
    >
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wider text-white mb-4">
            Join the Velmora Circle
          </h2>
          <p className="text-white/70 mb-8">
            Subscribe to receive 10% off your first order, plus exclusive access to new collections and private sales.
          </p>

          {status === 'success' ? (
            <div className="text-white/90">
              <p className="font-serif text-xl mb-2">Welcome to Velmora!</p>
              <p className="text-sm text-white/60">Check your email for your 10% discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-4 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
              />
              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="px-8 py-4 text-sm tracking-widest transition-all hover:opacity-90 disabled:opacity-50"
                style={{ 
                  backgroundColor: 'var(--color-velmora-gold)',
                  color: 'white'
                }}
              >
                {status === 'submitting' ? 'JOINING...' : 'SUBSCRIBE'}
              </button>
            </form>
          )}

          <p className="text-xs text-white/40 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
          </p>
        </div>
      </div>
    </section>
  );
}
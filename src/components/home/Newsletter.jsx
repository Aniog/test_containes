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
    <section className="py-20 bg-velmora-charcoal">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          Join the Velmora Circle
        </h2>
        <p className="text-white/70 mb-8">
          Subscribe and receive 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {status === 'success' ? (
          <div className="bg-velmora-gold/20 text-velmora-gold px-6 py-4">
            <p className="text-sm uppercase tracking-widest">
              Welcome to Velmora! Check your email for your discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-transparent border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-velmora-gold transition-colors"
              required
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="px-8 py-3 bg-velmora-gold text-white text-sm uppercase tracking-widest hover:bg-velmora-goldLight transition-colors disabled:opacity-50"
            >
              {status === 'submitting' ? 'Joining...' : 'Subscribe'}
            </button>
          </form>
        )}

        <p className="text-xs text-white/40 mt-4">
          By subscribing, you agree to our Privacy Policy and consent to receive updates.
        </p>
      </div>
    </section>
  );
}
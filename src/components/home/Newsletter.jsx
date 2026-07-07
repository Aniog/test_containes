import { useState } from 'react';

export function Newsletter() {
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
    <section className="py-20 md:py-28 bg-gold-500">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          Join the Velmora Circle
        </h2>
        <p className="text-white/80 font-light mb-8 max-w-md mx-auto">
          Subscribe for 10% off your first order, exclusive previews, and 
          styling inspiration delivered to your inbox.
        </p>

        {status === 'success' ? (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <p className="text-white font-serif text-lg">
              Welcome to the circle!
            </p>
            <p className="text-white/70 text-sm mt-2">
              Check your inbox for your 10% off code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3 rounded bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="px-6 py-3 bg-white text-gold-600 font-sans text-sm tracking-wider uppercase rounded hover:bg-cream-50 transition-colors disabled:opacity-50"
            >
              {status === 'submitting' ? 'Joining...' : 'Get 10% Off'}
            </button>
          </form>
        )}

        <p className="text-white/50 text-xs mt-6">
          By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

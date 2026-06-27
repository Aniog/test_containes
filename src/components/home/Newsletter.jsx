import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className="py-16 md:py-24 bg-gold">
      <div className="container-wide">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Join the Velmora World
          </h2>
          <p className="text-white/80 mb-8">
            Subscribe for 10% off your first order, exclusive access to new collections, and styling inspiration.
          </p>

          {status === 'success' ? (
            <p className="text-white font-medium animate-fade-in">
              Thank you! Check your inbox for your discount code.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-white/10 border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-8 py-3 bg-charcoal text-white text-xs font-medium tracking-wider uppercase hover:bg-charcoal/90 transition-colors disabled:opacity-50"
              >
                {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}

          <p className="text-xs text-white/60 mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

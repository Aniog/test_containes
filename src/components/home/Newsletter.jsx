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
    <section className="py-20 lg:py-28 bg-velmora-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl lg:text-4xl text-velmora-ivory">
            Join the Velmora Circle
          </h2>
          <p className="mt-4 text-velmora-ivory/80">
            Subscribe to receive 10% off your first order, exclusive access to new collections, and styling inspiration.
          </p>

          {status === 'success' ? (
            <div className="mt-6 p-4 bg-velmora-cream/20 rounded">
              <p className="text-velmora-ivory">Thank you for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-velmora-cream/10 border border-velmora-ivory/30 text-velmora-ivory placeholder-velmora-ivory/50 focus:outline-none focus:border-velmora-ivory transition-colors duration-300"
                  required
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="px-8 py-4 bg-velmora-cream text-velmora-charcoal font-medium tracking-wider hover:bg-velmora-ivory transition-colors duration-300 disabled:opacity-70"
                >
                  {status === 'submitting' ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
                </button>
              </div>
            </form>
          )}

          <p className="mt-4 text-xs text-velmora-ivory/60">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
}
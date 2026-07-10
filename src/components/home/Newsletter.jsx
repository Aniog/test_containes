import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate API call
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-20 bg-velmora-charcoal">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-cream mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-velmora-cream/60 mb-8">
          Subscribe to our newsletter for exclusive offers, new arrivals, and styling inspiration.
        </p>

        {status === 'success' ? (
          <div className="text-velmora-gold text-lg">
            Thank you for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-transparent border border-velmora-cream/20 text-velmora-cream placeholder:text-velmora-cream/40 focus:outline-none focus:border-velmora-gold transition-colors"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-4 bg-velmora-gold text-white uppercase tracking-widest text-sm hover:bg-velmora-goldLight transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}

        <p className="text-xs text-velmora-cream/40 mt-4">
          By subscribing, you agree to our Privacy Policy and consent to receive updates.
        </p>
      </div>
    </section>
  );
}
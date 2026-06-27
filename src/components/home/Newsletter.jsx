import { useState } from 'react';

const Newsletter = () => {
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
    <section 
      className="py-16 md:py-24"
      style={{ backgroundColor: 'var(--color-velmora-charcoal)' }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 
          className="font-serif text-3xl md:text-4xl mb-4 text-white"
          style={{ fontFamily: 'var(--font-family-serif)' }}
        >
          Join for 10% Off Your First Order
        </h2>
        <p className="text-gray-400 mb-8">
          Subscribe to receive exclusive offers, early access to new collections, and styling inspiration.
        </p>

        {status === 'success' ? (
          <div className="text-[var(--color-velmora-gold)] text-lg">
            Thank you for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--color-velmora-gold)] transition-colors"
              required
            />
            <button 
              type="submit"
              disabled={status === 'loading'}
              className="btn-accent whitespace-nowrap disabled:opacity-50"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}

        <p className="text-xs text-gray-500 mt-4">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
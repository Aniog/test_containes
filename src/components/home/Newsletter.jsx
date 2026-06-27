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
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: 'var(--color-charcoal)' }}
    >
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <h2
            className="font-serif text-3xl md:text-4xl mb-3 text-white"
          >
            Join the Velmora Circle
          </h2>
          <p
            className="text-sm md:text-base mb-8"
            style={{ color: 'var(--color-stone-light)' }}
          >
            Subscribe and receive 10% off your first order, plus early access to new collections and exclusive offers.
          </p>

          {status === 'success' ? (
            <div
              className="p-4 animate-fade-in"
              style={{
                backgroundColor: 'rgba(201, 169, 98, 0.1)',
                border: '1px solid var(--color-gold)'
              }}
            >
              <p className="text-sm" style={{ color: 'var(--color-gold)' }}>
                Thank you for subscribing! Check your email for your 10% discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-sm bg-transparent border focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                style={{
                  borderColor: 'var(--color-stone)',
                  color: 'white',
                }}
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 text-sm tracking-wider transition-all hover:opacity-90 disabled:opacity-50"
                style={{
                  backgroundColor: 'var(--color-gold)',
                  color: 'var(--color-charcoal)'
                }}
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}

          <p
            className="text-xs mt-4"
            style={{ color: 'var(--color-stone)' }}
          >
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
          </p>
        </div>
      </div>
    </section>
  );
}
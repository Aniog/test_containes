import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate submission
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-20 md:py-30 bg-accent">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-h2 text-secondary mb-3">
            Join for 10% Off
          </h2>
          <p className="text-body text-secondary/80 mb-8">
            Subscribe to our newsletter and receive 10% off your first order.
            Be the first to know about new collections and exclusive offers.
          </p>

          {status === 'success' ? (
            <div className="bg-card p-4 text-secondary">
              Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-card border border-secondary/20 text-secondary placeholder:text-secondary/50 focus:outline-none focus:border-secondary"
                required
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-8 py-3 bg-secondary text-primary font-medium hover:bg-secondary/90 transition-smooth disabled:opacity-50"
              >
                {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}

          <p className="text-caption text-secondary/60 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
}
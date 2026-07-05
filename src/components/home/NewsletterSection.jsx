import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
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
    <section className="section-spacing bg-gold/10 border-y border-linen">
      <div className="container max-w-2xl text-center">
        <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">
          Join the Velmora Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-4">
          Stay Connected
        </h2>
        <p className="text-charcoal/80 mb-8 max-w-lg mx-auto">
          Subscribe for exclusive early access to new collections, special offers, and styling inspiration. Plus, enjoy 10% off your first order.
        </p>

        {status === 'success' ? (
          <div className="py-4">
            <div className="inline-flex items-center gap-2 text-success">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">Welcome to Velmora! Check your inbox for 10% off.</span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-4 bg-white border border-linen text-charcoal placeholder:text-stone focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="px-8 py-4 bg-espresso text-white text-sm font-medium tracking-wider uppercase hover:bg-walnut transition-colors disabled:opacity-70"
            >
              {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}

        <p className="text-xs text-stone mt-6">
          By subscribing, you agree to receive marketing emails from Velmora. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

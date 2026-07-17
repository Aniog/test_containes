import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) return;
    
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setMessage('Welcome to Velmora! Check your inbox for 10% off.');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-20 lg:py-28 bg-charcoal">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
          Join the Velmora World
        </h2>
        <p className="text-cream/60 mb-8">
          Subscribe for 10% off your first order and be the first to know about new collections.
        </p>

        {status === 'success' ? (
          <div className="bg-gold-400/10 border border-gold-400/30 text-gold-200 px-6 py-4 rounded">
            {message}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={status === 'submitting'}
              className="flex-1 px-4 py-3 bg-transparent border border-cream/20 text-cream placeholder:text-cream/40 focus:border-gold-400 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="px-8 py-3 bg-cream text-charcoal text-sm uppercase tracking-wider hover:bg-cream/90 transition-colors disabled:opacity-50"
            >
              {status === 'submitting' ? 'Joining...' : 'Subscribe'}
            </button>
          </form>
        )}

        <p className="text-xs text-cream/40 mt-4">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

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
    }, 1000);
  };

  return (
    <section className="py-16 md:py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-charcoal-950 px-6 md:px-12 py-12 md:py-16 text-center">
          <h3 className="font-serif text-2xl md:text-3xl text-cream-50 mb-2">
            Join the Velmora Circle
          </h3>
          <p className="text-cream-400 text-sm mb-8 max-w-md mx-auto">
            Subscribe for 10% off your first order, early access to new collections, and exclusive styling tips.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-charcoal-900 border border-charcoal-700 text-cream-100 placeholder:text-charcoal-500 px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="bg-gold-500 text-white px-8 py-3 text-xs uppercase tracking-ultra-wide font-medium hover:bg-gold-600 transition-colors duration-200 disabled:opacity-50 whitespace-nowrap"
            >
              {status === 'submitting' ? 'Joining...' : 'Subscribe'}
            </button>
          </form>
          {status === 'success' && (
            <p className="text-gold-400 text-sm mt-4 animate-fade-in">
              Welcome to Velmora! Check your inbox for your 10% off code.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

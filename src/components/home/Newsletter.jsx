import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    // Simulate submission
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-16 md:py-24 bg-ink-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs tracking-widest-2xl uppercase text-gold-300 mb-4">
            Exclusive access
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory-50 mb-4">
            Join for 10% Off Your First Order
          </h2>
          <p className="font-sans text-ivory-300 text-sm md:text-base mb-10 max-w-md mx-auto">
            Be the first to discover new arrivals, receive styling inspiration, and enjoy members-only offers.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 bg-ink-700 border border-ink-600 text-ivory-50 placeholder:text-ink-400 text-sm focus:outline-none focus:border-gold-400 transition-colors"
              required
              disabled={status === 'submitting'}
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-gold whitespace-nowrap disabled:opacity-60"
            >
              {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 font-sans text-sm text-gold-300 animate-fade-in">
              Welcome to the Velmora circle! Check your inbox for your 10% off code.
            </p>
          )}

          <p className="mt-6 font-sans text-xs text-ink-400">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

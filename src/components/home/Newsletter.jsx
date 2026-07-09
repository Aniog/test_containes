import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('submitting');
    // Simulate submission
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-16 md:py-20 bg-espresso-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-mega-wide text-gold-400 mb-4">
            Exclusive Access
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-light tracking-wide mb-3">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-warm-400 text-sm mb-8 max-w-md mx-auto">
            Be the first to discover new collections, receive styling tips, and enjoy
            member-only offers.
          </p>

          {status === 'success' ? (
            <div className="bg-brand-500/20 border border-brand-500/30 rounded-sm px-6 py-4">
              <p className="text-gold-300 font-sans text-sm">
                Welcome to Velmora! Check your inbox for your exclusive discount.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 bg-espresso-900 border border-espresso-700 text-warm-100 placeholder-warm-600 text-sm font-sans focus:outline-none focus:border-brand-500 transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary !px-8 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {status === 'submitting' ? (
                  'Joining...'
                ) : (
                  <>
                    Subscribe
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          )}

          <p className="text-warm-600 text-xs mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

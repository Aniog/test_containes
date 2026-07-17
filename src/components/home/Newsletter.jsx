import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
    }, 800);
  };

  return (
    <section className="bg-dark-charcoal">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-xl mx-auto text-center">
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold/60 font-medium">Stay Connected</span>
          <h2 className="font-serif text-3xl md:text-4xl text-warm-white mt-4 font-light leading-tight">
            Join for 10% Off<br />
            <span className="italic">Your First Order</span>
          </h2>
          <p className="text-stone/50 text-sm mt-4 leading-relaxed max-w-sm mx-auto">
            Be the first to know about new collections, exclusive drops, and early access to sales.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto">
            <div className="flex border border-white/20 focus-within:border-gold/60 transition-colors duration-300">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-transparent text-warm-white placeholder:text-stone/40 px-5 py-3.5 text-sm outline-none font-sans"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-6 text-gold hover:text-gold-light transition-colors flex items-center justify-center"
                aria-label="Subscribe"
              >
                {status === 'submitting' ? (
                  <span className="w-4 h-4 border border-gold border-t-transparent rounded-full animate-spin" />
                ) : (
                  <ArrowRight size={18} />
                )}
              </button>
            </div>
            {status === 'success' && (
              <p className="text-success text-xs mt-3 text-left">Thank you! You're now subscribed.</p>
            )}
          </form>

          <p className="text-stone/30 text-[10px] mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
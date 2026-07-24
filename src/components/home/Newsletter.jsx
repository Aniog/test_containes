import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 800);
  };

  return (
    <section className="py-16 md:py-24 bg-deep-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Join the Inner Circle
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ivory font-light">
            Get 10% Off Your First Order
          </h2>
          <p className="mt-4 text-ivory/60 text-sm leading-relaxed max-w-md mx-auto">
            Be the first to know about new collections, exclusive drops, and 
            receive 10% off your first purchase.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-ivory/10 border border-ivory/20 text-ivory placeholder:text-ivory/40 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="px-8 py-3.5 bg-gold text-white text-sm tracking-[0.1em] uppercase hover:bg-gold-hover transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {status === 'submitting' ? 'Sending...' : 'Subscribe'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-gold text-sm animate-fadeIn">
              Thanks! Check your inbox for your 10% off code.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
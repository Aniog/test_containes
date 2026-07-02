import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const validate = (value) => {
    if (!value.trim()) return 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(value)) return 'Please enter a valid email';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate(email);
    if (err) {
      setError(err);
      return;
    }
    setError('');
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="bg-near-black py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-gold font-sans font-medium mb-4">
          Join Our Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">
          Your First Piece is 10% Off
        </h2>
        <p className="text-taupe-light text-sm md:text-base max-w-md mx-auto mb-8">
          Subscribe for early access to new collections, styling inspiration, and an exclusive 10% discount on your first order.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-white/5 border border-white/10 text-white placeholder:text-taupe-light/50 px-5 py-3.5 text-sm focus:outline-none focus:border-gold transition-colors"
              aria-label="Email address"
            />
            {error && (
              <p className="text-red-400 text-xs mt-1.5 text-left">{error}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={status === 'success'}
            className="bg-gold hover:bg-gold-dark text-white px-8 py-3.5 text-sm uppercase tracking-wider font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:bg-taupe-light/50"
          >
            {status === 'success' ? 'Subscribed!' : (
              <>
                Subscribe
                <Send className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>

        <p className="text-[11px] text-taupe-light/50 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
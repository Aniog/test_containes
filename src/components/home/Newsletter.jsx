import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-20 bg-stone-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
          Join for 10% Off Your First Order
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mb-4" />
        <p className="text-stone-400 text-sm tracking-wider mb-8">
          Be the first to know about new arrivals, exclusive offers, and styling tips.
        </p>

        {submitted ? (
          <div className="bg-gold/10 border border-gold/30 rounded-sm px-6 py-4">
            <p className="text-gold font-serif text-lg">Welcome to the Velmora family.</p>
            <p className="text-stone-400 text-sm mt-1">Check your inbox for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-stone-800 border border-stone-700 text-white px-4 py-3 text-sm tracking-wider placeholder:text-stone-500 focus:outline-none focus:border-gold transition-colors rounded-none"
            />
            <button
              type="submit"
              className="bg-gold hover:bg-gold-dark text-white px-6 py-3 text-xs tracking-widest uppercase font-sans font-medium transition-colors flex items-center justify-center gap-2 rounded-none"
            >
              <Send size={14} />
              Subscribe
            </button>
          </form>
        )}

        <p className="text-stone-600 text-[11px] mt-4 tracking-wider">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

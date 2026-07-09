import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section className="py-16 md:py-20 bg-velmora-900 relative overflow-hidden">
      {/* Subtle gold gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[100px]" />

      <div className="container-wide relative text-center">
        <span className="text-overline uppercase tracking-overline text-gold block mb-3">
          Stay Connected
        </span>
        <h2 className="font-serif text-3xl md:text-heading-2 text-white mb-3">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-sm text-velmora-400 max-w-md mx-auto mb-8">
          Be the first to discover new arrivals, exclusive offers, and styling inspiration.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-stretch gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-5 py-3.5 bg-velmora-800 border border-velmora-700 text-white placeholder:text-velmora-500 text-sm focus:outline-none focus:border-gold transition-colors"
          />
          <button
            type="submit"
            className="bg-gold hover:bg-gold-dark text-velmora-950 px-8 py-3.5 text-sm font-semibold tracking-wide uppercase transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Send size={14} />
            Subscribe
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm text-gold animate-fade-in">
            Welcome to Velmora! Check your inbox for your discount code.
          </p>
        )}

        <p className="mt-4 text-xs text-velmora-600">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

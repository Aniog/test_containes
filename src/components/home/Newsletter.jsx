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
    <section className="py-16 sm:py-20 lg:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-surface via-base to-surface border border-border rounded-lg overflow-hidden">
          {/* Decorative accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

          <div className="px-6 sm:px-12 lg:px-20 py-14 sm:py-16 lg:py-20 text-center">
            <p className="text-xs tracking-widest-2xl uppercase text-gold mb-4">Stay Connected</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-text-primary font-light mb-4">
              Join for <span className="italic text-gold">10% Off</span>
            </h2>
            <p className="text-sm text-text-muted max-w-md mx-auto mb-8 leading-relaxed">
              Subscribe to receive exclusive offers, early access to new collections, and styling inspiration.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-base border border-border rounded px-5 py-3.5 text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-gold transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-gold hover:bg-gold-light text-base text-sm font-medium tracking-widest-xl uppercase px-8 py-3.5 flex items-center justify-center gap-2 transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
                <Send size={14} />
              </button>
            </form>

            {status === 'success' && (
              <p className="text-sm text-gold mt-4 animate-fade-in">
                Welcome to Velmora! Check your inbox for your 10% discount code.
              </p>
            )}

            <p className="text-[10px] text-text-muted/50 mt-5 tracking-wider">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

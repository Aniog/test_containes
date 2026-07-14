import React, { useState } from 'react';
import Button from '@/components/ui/Button';

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
    <section className="relative py-20 md:py-28 bg-charcoal overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }} />

      <div className="relative z-10 max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-4">
          Stay Connected
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-ivory mb-4">
          Join for 10% Off
        </h2>
        <p className="text-sm text-ivory/60 mb-8 font-sans max-w-md mx-auto">
          Be the first to discover new collections, receive exclusive offers,
          and get early access to sales.
        </p>

        {submitted ? (
          <div className="bg-gold/10 border border-gold/30 rounded-lg p-6">
            <p className="font-serif text-xl text-gold mb-1">Welcome to the Circle</p>
            <p className="text-xs text-ivory/60 font-sans">
              Check your inbox for your 10% discount code.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-white/20 text-ivory placeholder:text-ivory/40 px-5 py-3.5 text-sm font-sans focus:outline-none focus:border-gold transition-colors rounded"
            />
            <Button type="submit" variant="primary" size="md" className="rounded">
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}

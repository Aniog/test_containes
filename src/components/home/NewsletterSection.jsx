import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 rounded-lg p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]/40" />
          <div className="relative z-10 max-w-lg mx-auto">
            <p className="text-gold text-xs uppercase tracking-[0.15em] mb-3">Join the Circle</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#f5f0eb] mb-3">
              Join for 10% Off Your First Order
            </h2>
            <p className="text-sm text-[#a09890] mb-6">
              Be the first to know about new collections, exclusive drops, and receive 10% off your first purchase.
            </p>

            {submitted ? (
              <p className="text-gold text-sm">Thank you! Check your inbox for your welcome code.</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-[#0a0a0a] border border-[#2a2a2a] rounded px-4 py-3 text-sm text-[#f5f0eb] placeholder:text-[#5a5248] focus:outline-none focus:border-gold/50 transition-colors"
                />
                <button
                  type="submit"
                  className="btn-primary inline-flex items-center gap-2 whitespace-nowrap"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
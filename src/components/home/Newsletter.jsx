import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Newsletter() {
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
    <section className="bg-dark py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs tracking-widest uppercase text-accent mb-3">Stay Connected</p>
        <h2 className="serif-heading text-3xl md:text-4xl text-dark-text mb-4">
          Join for <span className="text-accent">10% Off</span> Your First Order
        </h2>
        <p className="text-white/60 text-sm mb-8 max-w-md mx-auto">
          Be the first to know about new collections, exclusive offers, and styling tips.
        </p>

        {submitted ? (
          <div className="bg-white/10 rounded-sm p-6">
            <p className="serif-heading text-xl text-dark-text mb-2">Welcome to Velmora</p>
            <p className="text-white/60 text-sm">Check your inbox for your exclusive discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-white/10 border border-white/20 text-dark-text placeholder:text-white/40 px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

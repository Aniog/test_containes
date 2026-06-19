import React, { useState } from 'react';
import { Send } from 'lucide-react';

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
    <section className="bg-velmora-dark">
      <div className="section-padding py-16 md:py-20">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-sans text-caption uppercase tracking-widest-2xl text-gold mb-3">
            Join the Velmora Circle
          </p>
          <h2 className="font-serif text-heading-lg text-white mb-3">
            Get 10% Off Your First Order
          </h2>
          <p className="font-sans text-sm text-velmora-sand mb-8">
            Be the first to discover new arrivals, exclusive offers, and styling inspiration.
          </p>

          {submitted ? (
            <div className="animate-fade-in">
              <p className="font-sans text-sm text-gold">
                Welcome to the Velmora circle. Check your inbox for your exclusive code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-velmora-charcoal border border-velmora-stone/30 text-white font-sans text-sm px-5 py-3.5 focus:outline-none focus:border-gold transition-colors placeholder:text-velmora-stone"
              />
              <button
                type="submit"
                className="bg-gold text-velmora-black px-6 py-3.5 font-sans text-caption uppercase tracking-widest-xl hover:bg-gold-dark transition-colors flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Subscribe</span>
              </button>
            </form>
          )}

          <p className="font-sans text-[11px] text-velmora-stone/60 mt-4">
            Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}

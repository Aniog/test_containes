import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

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
    <section className="py-16 md:py-24 bg-base">
      <div className="mx-auto max-w-page px-4 md:px-8 lg:px-12">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-white/50 mb-3">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Join for 10% Off
          </h2>
          <p className="text-white/60 font-sans mb-8">
            Subscribe to receive exclusive offers, early access to new collections, and styling inspiration.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-gold">
              <Check className="w-5 h-5" />
              <span className="font-sans text-sm font-medium">
                Thank you! Check your inbox for your code.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-white px-6 py-3 text-sm font-sans font-medium tracking-wide uppercase hover:bg-gold-hover transition-colors flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <p className="text-white/30 text-[10px] font-sans mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

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
    <section className="py-16 md:py-20 bg-velmora-bg">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="bg-velmora-ink text-white py-12 md:py-16 px-6 md:px-12 flex flex-col items-center text-center">
          <p className="text-velmora-goldlight text-xs tracking-[0.35em] uppercase font-medium mb-3">
            Newsletter
          </p>
          <h2 className="font-serif text-2xl md:text-4xl font-light mb-3">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-velmora-taupe text-sm max-w-md mb-8">
            Be the first to know about new collections, exclusive offers, and styling tips from our studio.
          </p>

          {submitted ? (
            <div className="text-velmora-goldlight text-sm tracking-wide">
              Thank you! Check your inbox for your discount code.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-velmora-taupe px-4 py-3 text-sm focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-velmora-gold text-white px-6 py-3 text-xs tracking-[0.2em] uppercase font-medium hover:bg-velmora-golddark transition-colors flex items-center justify-center gap-2"
              >
                Subscribe
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

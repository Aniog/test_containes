import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

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
    <section className="py-16 md:py-20 bg-gold">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <div className="max-w-xl mx-auto">
          <Mail className="w-8 h-8 text-white/80 mx-auto mb-4" />
          <h2 className="font-serif text-2xl md:text-3xl tracking-wider uppercase text-white mb-3">
            Join the Velmora Circle
          </h2>
          <p className="font-sans text-sm text-white/80 mb-8">
            Subscribe for 10% off your first order, early access to new collections,
            and styling inspiration.
          </p>

          {submitted ? (
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <p className="font-serif text-lg text-white">Welcome to Velmora</p>
              <p className="font-sans text-sm text-white/80 mt-1">
                Check your inbox for your 10% off code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-sm px-4 py-3.5 text-sm font-sans text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white/50"
              />
              <button
                type="submit"
                className="bg-warm-800 text-white font-sans text-xs tracking-widest uppercase py-3.5 px-8 rounded-sm hover:bg-warm-900 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <p className="font-sans text-[10px] text-white/50 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

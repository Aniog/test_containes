import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

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
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-charcoal rounded-2xl px-6 py-12 md:px-12 md:py-16 text-center">
          <p className="font-sans text-xs tracking-wide-custom uppercase text-gold-light mb-3">
            Exclusive Access
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
            Join for 10% Off Your First Order
          </h2>
          <p className="font-sans text-sm text-white/60 max-w-md mx-auto mb-8">
            Be the first to discover new collections, get styling tips, and enjoy
            members-only offers.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-3 text-gold-light animate-fadeIn">
              <CheckCircle className="w-5 h-5" />
              <p className="font-sans text-sm font-medium">
                Welcome to the Velmora family! Check your inbox.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-11 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-full text-sm font-sans text-white placeholder:text-white/40 focus:outline-none focus:border-gold-light focus:ring-1 focus:ring-gold-light"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3.5 bg-gold text-white font-sans text-sm font-medium tracking-wide uppercase rounded-full hover:bg-gold-dark transition-colors flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

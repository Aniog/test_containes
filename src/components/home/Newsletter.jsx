import React, { useState } from 'react';

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
    <section className="py-16 md:py-24 bg-velmora-gold">
      <div className="container-velmora">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Join the Velmora Family
          </h2>
          <p className="font-sans text-sm text-white/80 mb-8 leading-relaxed">
            Subscribe to receive 10% off your first order, plus early access to new collections, 
            styling tips, and exclusive offers.
          </p>

          {submitted ? (
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-sm">
              <p className="font-serif text-lg text-white mb-2">Thank you for subscribing!</p>
              <p className="font-sans text-sm text-white/80">
                Check your inbox for your 10% discount code.
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
                className="flex-1 px-5 py-3.5 bg-white/10 border border-white/30 text-white placeholder-white/50 font-sans text-sm focus:border-white focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-velmora-black text-white font-sans text-xs tracking-nav uppercase hover:bg-velmora-charcoal transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="font-sans text-[11px] text-white/50 mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}

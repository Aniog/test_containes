import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 px-4 bg-velmora-charcoal text-white">
      <div className="container-premium max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
          Join the Velmora Family
        </h2>
        <p className="text-velmora-cream/80 mb-2">
          Get 10% off your first order
        </p>
        <p className="text-sm text-velmora-cream/60 mb-8">
          Plus exclusive access to new collections, styling tips, and member-only offers.
        </p>

        {isSubmitted ? (
          <div className="bg-velmora-gold/20 p-6 rounded">
            <p className="font-serif text-lg">Thank you for joining!</p>
            <p className="text-sm mt-2">Check your inbox for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 bg-transparent border border-velmora-cream/30 text-white placeholder-velmora-cream/50 focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-white px-8 py-3 font-sans text-sm tracking-wider uppercase hover:bg-velmora-gold-light transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <span>Subscribe</span>
              <ArrowRight size={16} />
            </button>
          </form>
        )}

        <p className="text-xs text-velmora-cream/40 mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}

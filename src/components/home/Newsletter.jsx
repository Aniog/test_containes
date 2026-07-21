import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

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
    <section className="py-20 bg-velmora-charcoal text-velmora-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail size={40} className="mx-auto mb-6 text-velmora-gold" />
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Join the Velmora Family</h2>
        <p className="text-lg text-velmora-warm mb-2">
          Get 10% off your first order
        </p>
        <p className="text-sm text-velmora-warm/80 mb-8 max-w-xl mx-auto">
          Subscribe to receive updates on new collections, exclusive offers, and jewelry care tips.
        </p>

        {isSubmitted ? (
          <div className="bg-velmora-gold/20 text-velmora-cream px-6 py-4 rounded-sm">
            Thank you for subscribing! Check your email for your 10% discount code.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 bg-velmora-charcoal-light border border-velmora-warm/30 text-velmora-cream placeholder:text-velmora-warm/50 focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-gold hover:bg-velmora-gold-dark text-white px-8 py-3 text-sm tracking-wider uppercase transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

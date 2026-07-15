import React, { useState } from 'react';
import { Mail } from 'lucide-react';

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
    <section className="bg-charcoal section-padding section-margin">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Mail size={24} className="text-gold-500" />
        </div>
        
        <p 
          className="text-xs uppercase tracking-widest text-cream/50 mb-2"
          style={{ letterSpacing: '0.3em' }}
        >
          Join the Velmora Family
        </p>
        
        <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
          Get 10% Off Your First Order
        </h2>
        
        <p className="text-cream/60 mb-8 max-w-lg mx-auto">
          Subscribe to receive exclusive offers, early access to new collections, 
          and styling inspiration delivered to your inbox.
        </p>

        {submitted ? (
          <div className="text-gold-500 font-serif text-lg">
            Thank you for joining us!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-charcoal-light border border-cream/20 text-cream 
                         placeholder:text-cream/30 text-sm focus:border-gold-500 transition-colors"
            />
            <button type="submit" className="btn-gold whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}

        <p className="text-xs text-cream/30 mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

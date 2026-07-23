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
    <section className="newsletter-section">
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          className="font-serif mb-3"
          style={{ fontSize: 'clamp(1.875rem, 4vw, 2.5rem)', color: '#fdf9f3' }}
        >
          Join the Velmora Family
        </h2>
        
        <p 
          className="mb-8"
          style={{ color: '#e0b884', fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', letterSpacing: '0.05em' }}
        >
          Get 10% off your first order + exclusive access to new collections
        </p>

        {isSubmitted ? (
          <div className="py-4">
            <p className="text-cream-200 text-lg font-serif" style={{ fontStyle: 'italic' }}>
              Thank you for joining us!
            </p>
            <p className="text-cream-300 text-sm mt-2">
              Check your inbox for your 10% discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 bg-cream-50/10 border border-cream-200/30 text-cream-50 placeholder-cream-300 focus:outline-none focus:border-gold transition-colors"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem' }}
            />
            <button 
              type="submit"
              className="bg-gold hover:bg-gold-600 text-charcoal-950 px-8 py-3 uppercase tracking-widest text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-premium"
            >
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>
        )}

        <p className="text-cream-400 text-xs mt-6" style={{ fontFamily: 'Inter, sans-serif' }}>
          By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}

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
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="section-padding bg-velmora-charcoal text-white">
      <div className="container-custom max-w-4xl mx-auto text-center">
        <Mail size={48} className="mx-auto mb-6 text-velmora-gold" />
        
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
          Join the Velmora Family
        </h2>
        
        <p className="text-lg mb-2 font-light">
          Get <span className="text-velmora-gold font-medium">10% off</span> your first order
        </p>
        
        <p className="text-velmora-warmGray mb-10 max-w-lg mx-auto">
          Subscribe to receive exclusive offers, early access to new collections, and jewelry care tips.
        </p>

        {isSubmitted ? (
          <div className="bg-velmora-gold/20 border border-velmora-gold/50 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-velmora-gold font-medium">
              Thank you for joining! Check your email for your discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 bg-velmora-warmGray/20 border border-velmora-warmGray/30 
                       rounded-lg text-white placeholder-velmora-warmGray/50 
                       focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="btn-gold inline-flex items-center justify-center gap-2 
                       whitespace-nowrap hover:gap-3 transition-all duration-300"
            >
              Subscribe
              <ArrowRight size={18} />
            </button>
          </form>
        )}

        <p className="text-xs text-velmora-warmGray/70 mt-6">
          By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}

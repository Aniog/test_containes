import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const NewsletterSection = () => {
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
    <section className="bg-velmora-charcoal text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <Mail size={48} className="mx-auto mb-6 text-velmora-gold" />
          
          <h2 className="font-serif text-4xl md:text-5xl mb-4 tracking-wide">
            Join for 10% Off
          </h2>
          
          <p className="text-lg mb-10 font-light tracking-wide">
            Subscribe to our newsletter and receive a special discount code for your first order.
          </p>

          {isSubmitted ? (
            <div className="bg-green-600 text-white px-6 py-4 rounded-sm">
              <p className="font-medium">Thank you for subscribing!</p>
              <p className="text-sm mt-1">Check your email for your 10% discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-transparent border border-white/30 
                           text-white placeholder:text-white/50 
                           focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-velmora-gold text-velmora-charcoal px-8 py-4 
                           uppercase tracking-widest text-sm font-medium 
                           hover:bg-white hover:text-velmora-charcoal 
                           transition-all duration-300 flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight size={16} />
              </button>
            </form>
          )}

          <p className="text-xs text-white/60 mt-6">
            By subscribing, you agree to receive marketing emails. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

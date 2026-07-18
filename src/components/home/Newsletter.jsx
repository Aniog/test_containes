import React, { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const sectionRef = useScrollReveal(0.1);
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
    <section ref={sectionRef} className="reveal">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="bg-surface-tertiary border border-gold/10 px-8 md:px-16 py-14 md:py-20 text-center">
          <div className="max-w-lg mx-auto">
            <Mail size={28} className="text-gold mx-auto mb-5" strokeWidth={1.5} />
            <h2 className="heading-serif text-2xl md:text-4xl text-brand-50 mb-3">
              Join for 10% Off Your First Order
            </h2>
            <p className="text-brand-400 text-sm mb-8 leading-relaxed">
              Be the first to discover new arrivals, exclusive offers, and styling inspiration
              delivered straight to your inbox.
            </p>

            {submitted ? (
              <div className="animate-fade-in">
                <p className="text-gold text-sm font-medium">Welcome to Velmora.</p>
                <p className="text-brand-400 text-xs mt-1">Check your inbox for your exclusive discount code.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-surface-primary border border-gold/20 text-brand-100 placeholder-brand-600 text-sm px-5 py-3.5 focus:outline-none focus:border-gold/50 transition-colors"
                />
                <button type="submit" className="btn-gold whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            )}

            <p className="text-brand-700 text-[11px] mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

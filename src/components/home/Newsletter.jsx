import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Newsletter = () => {
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
    <section className="py-16 md:py-24 bg-velmora-espresso">
      <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
        <p className="text-xs tracking-widest uppercase text-velmora-gold mb-3">Insider Access</p>
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-ivory mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-velmora-stone mb-8">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-velmora-goldlight">
            <Check className="w-5 h-5" />
            <span className="text-sm font-medium">Thank you! Check your inbox for your code.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 bg-velmora-charcoal/50 border border-velmora-mocha text-velmora-ivory text-sm placeholder:text-velmora-stone focus:outline-none focus:border-velmora-gold rounded-sm transition-colors"
              required
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-velmora-gold text-velmora-charcoal text-xs tracking-widest uppercase font-semibold hover:bg-velmora-goldlight transition-colors rounded-sm flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;

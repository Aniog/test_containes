import React, { useState } from 'react';
import { Mail, ArrowRight, Check } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-velmora-gold">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="w-8 h-8 text-white/80 mx-auto mb-4" />
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-white">
          Join for 10% Off
        </h2>
        <p className="font-sans text-sm text-white/80 mt-3 max-w-md mx-auto leading-relaxed">
          Subscribe for exclusive early access to new collections, styling tips, and a
          welcome gift on your first order.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <div className="flex-1 relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-5 py-3.5 bg-white/10 border border-white/30 text-white placeholder:text-white/60 text-sm font-sans focus:outline-none focus:border-white/60 transition-colors rounded-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="px-8 py-3.5 bg-white text-velmora-espresso font-sans text-xs font-semibold tracking-[0.2em] uppercase hover:bg-velmora-cream transition-colors duration-300 flex items-center justify-center gap-2 rounded-sm"
          >
            {submitted ? (
              <>
                <Check className="w-4 h-4" />
                Subscribed
              </>
            ) : (
              <>
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>
        <p className="font-sans text-[10px] text-white/50 mt-4 tracking-wider">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;

import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export default function Newsletter() {
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
    <section className="py-16 md:py-24 bg-espresso">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="max-w-xl mx-auto text-center">
          <Mail className="w-8 h-8 text-gold mx-auto mb-4" />
          <h2 className="heading-serif text-3xl md:text-4xl text-ivory mb-3">
            Join for 10% Off
          </h2>
          <p className="text-ivory/60 text-sm mb-8 font-sans">
            Subscribe to receive exclusive offers, early access to new collections,
            and styling tips straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-5 py-3.5 bg-ivory/10 border border-ivory/20 text-ivory text-sm font-sans placeholder:text-ivory/30 focus:outline-none focus:border-gold transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              className="btn-gold text-xs whitespace-nowrap sm:w-auto"
            >
              {submitted ? (
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4" /> Subscribed
                </span>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>

          <p className="text-ivory/30 text-xs mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

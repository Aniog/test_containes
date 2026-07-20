import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
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
    <section className="py-20 lg:py-28 bg-velmora-charcoal">
      <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-velmora-gold mb-4">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-white mb-4">
          Exclusive Access
        </h2>
        <p className="font-sans text-sm text-velmora-warmGrayLight mb-10">
          Be the first to discover new collections, styling inspiration, and receive 10% off your first order.
        </p>
        {submitted ? (
          <p className="font-serif text-lg text-velmora-gold italic">
            Welcome to Velmora. Check your inbox for your exclusive code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-white/20 text-white font-sans text-sm px-5 py-3.5 placeholder:text-velmora-warmGrayLight focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-white text-xs font-sans tracking-[0.15em] uppercase px-8 py-3.5 hover:bg-velmora-goldDark transition-colors flex items-center justify-center gap-2"
            >
              <Send size={14} />
              Join
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;

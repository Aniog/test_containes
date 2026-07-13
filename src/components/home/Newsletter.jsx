import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
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
    <section className="bg-velmora-gold/5 border-y border-velmora-border">
      <div className="max-w-2xl mx-auto px-6 md:px-10 py-16 md:py-20 text-center">
        <p className="text-velmora-gold text-xs tracking-super uppercase mb-4">The Velmora Edit</p>
        <h2 className="font-serif text-2xl md:text-3xl text-velmora-dark mb-3">
          Join for 10% off your first order
        </h2>
        <p className="text-sm text-velmora-taupe mb-8 leading-relaxed">
          New collections, styling inspiration, and early access to limited drops — delivered with the same care as our jewelry.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-lg text-velmora-dark mb-2">Welcome to the family.</p>
            <p className="text-sm text-velmora-taupe">Check your inbox for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 bg-white border border-velmora-border text-sm text-velmora-dark placeholder:text-velmora-taupe/60 focus:outline-none focus:border-velmora-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-velmora-dark text-white text-xs tracking-widest uppercase hover:bg-velmora-gold transition-all duration-300 flex items-center justify-center gap-2"
            >
              Subscribe <ArrowRight className="w-3 h-3" />
            </button>
          </form>
        )}

        <p className="text-[10px] text-velmora-taupe/60 mt-5">
          No spam, ever. Unsubscribe anytime. View our{' '}
          <a href="#" className="underline underline-offset-2 hover:text-velmora-gold">Privacy Policy</a>.
        </p>
      </div>
    </section>
  );
}

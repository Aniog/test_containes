import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterCta() {
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
    <section className="py-20 md:py-28 bg-midnight">
      <div className="container-page max-w-[600px] mx-auto text-center">
        <p className="text-white/40 text-xs tracking-widest uppercase mb-4">Join Velmora</p>
        <h2 className="font-serif text-3xl md:text-4xl text-white font-medium mb-4">
          Get 10% off your first order
        </h2>
        <p className="text-white/50 text-sm leading-relaxed mb-8">
          Sign up for early access to new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <p className="text-warm-400 text-sm tracking-wider">
            Thank you — check your inbox for your code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col xs:flex-row gap-3 max-w-[420px] mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent border border-white/20 text-white placeholder:text-white/30
                         px-5 py-3.5 text-sm focus:outline-none focus:border-warm-400 transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap group">
              Sign Up
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

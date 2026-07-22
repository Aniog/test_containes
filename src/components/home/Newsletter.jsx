import React, { useState } from 'react';

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
    <section className="py-20 md:py-28 bg-velvet-950">
      <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-warm-500 mb-4">Stay Connected</p>
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
          Join for 10% off your first order
        </h2>
        <p className="font-sans text-base text-velvet-400 mb-10 max-w-md mx-auto">
          Sign up for early access to new collections, exclusive offers, and styling inspiration.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 bg-transparent border border-velvet-600 text-white placeholder-velvet-500 px-5 py-3.5 font-sans text-sm focus:outline-none focus:border-warm-500 transition-colors"
            required
          />
          <button
            type="submit"
            className="bg-warm-600 hover:bg-warm-700 text-white font-sans text-xs tracking-widest uppercase px-8 py-3.5 transition-colors duration-200"
          >
            {submitted ? 'Thank You' : 'Sign Up'}
          </button>
        </form>
        {submitted && (
          <p className="text-warm-400 text-sm mt-4 font-sans animate-fade-in">
            Welcome to the Velmora family — check your inbox
          </p>
        )}
      </div>
    </section>
  );
}

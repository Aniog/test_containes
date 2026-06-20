import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-base-900 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-300">Join the List</p>
        <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-white md:text-4xl">
          Get 10% off your first order
        </h2>
        <p className="mt-3 text-base-300">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <p className="mt-6 text-sm font-medium text-gold-300">Thank you! Check your inbox for your code.</p>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 rounded-full border border-base-700 bg-base-800 px-5 py-3 text-sm text-base-100 placeholder-base-500 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;

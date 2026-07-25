import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-brand-dark py-16 md:py-24">
      <div className="container-editorial">
        <div className="mx-auto max-w-2xl text-center text-white">
          <h2 className="font-serif text-3xl md:text-4xl">Join the List</h2>
          <p className="mt-3 text-sm text-white/70">
            Sign up for 10% off your first order, early access to new drops, and journal stories.
          </p>

          {submitted ? (
            <p className="mt-6 text-sm text-white/80">
              Welcome to Velmora. Check your inbox for your welcome code.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-white/40"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 2200);
    }
  };

  return (
    <section className="newsletter py-16 md:py-20">
      <div className="max-w-xl mx-auto px-6 text-center">
        <div className="font-serif text-3xl md:text-4xl tracking-[-0.01em] mb-3 text-white">
          Join for 10% off your first order
        </div>
        <p className="text-[#C9BFB3] text-sm mb-8 tracking-wide">
          Be the first to know about new collections and private events.
        </p>

        {submitted ? (
          <div className="text-[#B89778] text-lg py-3">Thank you. Welcome to the circle.</div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="input flex-1 bg-white/95 border-[#4A4642] text-velmora-text placeholder:text-velmora-text-light"
              required
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
        <p className="text-[10px] text-[#A89E92] mt-4 tracking-widest">We respect your inbox. Unsubscribe anytime.</p>
      </div>
    </section>
  );
};

export default Newsletter;

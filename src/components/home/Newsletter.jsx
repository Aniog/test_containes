import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 2000);
    }
  };

  return (
    <section className="newsletter py-16 md:py-20">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="serif text-3xl md:text-4xl text-white tracking-[-0.01em] mb-3">
          Join for 10% off your first order
        </h2>
        <p className="text-white/70 text-sm mb-8">
          Be the first to know about new arrivals, private sales, and stories from the atelier.
        </p>

        {submitted ? (
          <p className="text-[#B89778] text-lg">Thank you. Welcome to the circle.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="input flex-1"
              required
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
        <p className="text-[10px] text-white/50 mt-4 tracking-wider">
          We respect your inbox. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;

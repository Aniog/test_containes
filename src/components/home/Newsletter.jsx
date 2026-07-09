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
      }, 2500);
    }
  };

  return (
    <section className="newsletter py-16">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="heading-md text-white mb-3">Join for 10% off your first order</h2>
        <p className="text-[#A8A29E] text-sm mb-8">
          Be the first to know about new collections, styling tips, and exclusive offers.
        </p>

        {submitted ? (
          <p className="text-[#B8976A] text-lg">Thank you. Welcome to the circle.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input flex-1 bg-white/95 text-[#1C1917] placeholder:text-[#6B645E]"
              required
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">
              SUBSCRIBE
            </button>
          </form>
        )}
        <p className="text-[10px] text-[#A8A29E] mt-4 tracking-wider">
          We respect your inbox. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
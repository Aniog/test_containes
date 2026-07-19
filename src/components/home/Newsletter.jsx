import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 2500);
    }
  };

  return (
    <section className="newsletter-block py-16">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="font-serif-custom text-3xl tracking-[0.02em] mb-3">Join for 10% off your first order</h2>
        <p className="text-[#C4B5A5] text-sm mb-8 tracking-[0.02em]">
          Be the first to know about new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="text-[#C5A46E] py-3">Thank you. Welcome to the circle.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="YOUR EMAIL ADDRESS"
              required
              className="flex-1 bg-transparent border border-[#C4B5A5] px-5 py-3.5 text-sm tracking-[0.05em] placeholder:text-[#C4B5A5]/60 focus:outline-none focus:border-[#C5A46E]"
            />
            <button type="submit" className="btn-gold whitespace-nowrap">
              SUBSCRIBE
            </button>
          </form>
        )}
        
        <p className="text-[10px] text-[#C4B5A5] mt-4 tracking-[0.05em]">
          We respect your inbox. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;

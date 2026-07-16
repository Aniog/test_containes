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
    <section className="newsletter-block py-16">
      <div className="max-w-xl mx-auto px-6 text-center">
        <p className="text-xs tracking-[0.15em] text-[#B89778] mb-3">BECOME A VELMORA INSIDER</p>
        <h2 className="font-serif text-3xl text-[#F8F5F1] tracking-wide mb-3">Join for 10% off your first order</h2>
        <p className="text-[#D4C9B8] text-sm mb-8">Be the first to know about new arrivals, private sales, and styling stories.</p>

        {submitted ? (
          <p className="text-[#B89778] py-3">Thank you. Welcome to the circle.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="YOUR EMAIL ADDRESS"
              className="input flex-1 bg-[#F8F5F1] text-[#1C1917] placeholder:text-[#8C7660]"
              required
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              SUBSCRIBE
            </button>
          </form>
        )}
        <p className="text-[10px] text-[#8C7660] mt-4 tracking-wider">We respect your inbox. Unsubscribe anytime.</p>
      </div>
    </section>
  );
};

export default Newsletter;

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

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
      }, 2000);
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-20 text-center">
      <p className="text-xs tracking-[3px] text-[#B89778] mb-3">BECOME PART OF OUR WORLD</p>
      <h2 className="font-serif text-3xl tracking-[1px] text-[#2C2825] mb-4">
        Join for 10% off your first order
      </h2>
      <p className="text-[#6B665F] mb-8 max-w-md mx-auto">
        Be the first to know about new collections, private sales, and stories from the studio.
      </p>

      {submitted ? (
        <p className="text-[#B89778] tracking-[1px]">Thank you. Welcome to the circle.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="YOUR EMAIL ADDRESS"
            required
            className="flex-1 px-5 py-3 text-sm border border-[#E8E4DE] bg-white focus:outline-none focus:border-[#B89778] placeholder:text-[#B8B3AB] tracking-[1px]"
          />
          <Button type="submit" className="sm:px-8 tracking-[1.5px]">
            SUBSCRIBE
          </Button>
        </form>
      )}
    </section>
  );
};

export default Newsletter;

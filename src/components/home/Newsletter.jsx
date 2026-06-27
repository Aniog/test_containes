import React, { useState } from 'react';
import Button from '../ui/Button';

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
      }, 2200);
    }
  };

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-16 md:py-20">
      <div className="bg-[#0F0E0C] text-center py-14 px-6 md:px-12 rounded-sm">
        <span className="text-[#C5A46E] text-xs tracking-[3px]">BECOME PART OF THE STORY</span>
        <h2 className="font-serif text-white text-3xl md:text-4xl tracking-[-0.5px] mt-3 mb-2">Join for 10% off your first order</h2>
        <p className="text-[#A8A29C] text-sm max-w-sm mx-auto mb-8">Receive early access to new collections, styling notes, and private events.</p>

        {submitted ? (
          <p className="text-[#C5A46E] tracking-wide">Thank you. Welcome to the circle.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="YOUR EMAIL ADDRESS"
              required
              className="flex-1 bg-transparent border border-[#C5A46E]/40 text-white placeholder:text-[#A8A29C] px-5 py-3 text-sm tracking-[1px] focus:outline-none focus:border-[#C5A46E]"
            />
            <Button type="submit" variant="solid" size="md" className="sm:px-10">
              JOIN
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
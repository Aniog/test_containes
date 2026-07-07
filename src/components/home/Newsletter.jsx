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
    <section className="bg-[#2C2522] py-16">
      <div className="max-w-md mx-auto px-6 text-center">
        <div className="font-serif text-3xl tracking-[1px] text-white mb-3">Join the Circle</div>
        <p className="text-[#A89B8C] mb-8 text-sm tracking-wide">Receive 10% off your first order and early access to new collections.</p>
        
        {submitted ? (
          <p className="text-[#8B7355] py-3">Thank you. Welcome to Velmora.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="YOUR EMAIL ADDRESS"
              className="flex-1 px-5 py-3.5 bg-transparent border border-[#4A413D] text-white placeholder:text-[#6B635C] text-sm tracking-[1px] focus:outline-none focus:border-[#8B7355]"
              required
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-[#8B7355] text-white text-sm tracking-[2px] hover:bg-[#6B553F] transition-colors whitespace-nowrap"
            >
              SUBSCRIBE
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;

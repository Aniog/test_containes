import React, { useState } from 'react';
import Button from '../ui/Button';

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
        <h3 className="serif text-3xl tracking-wide mb-3">Join for 10% off your first order</h3>
        <p className="text-[#D4CFC6] text-sm mb-8 tracking-wide">
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
              className="input flex-1 bg-[#F8F5F1] text-[#1C1917] placeholder:text-[#6B645C]"
              required
            />
            <Button type="submit" variant="accent" className="sm:w-auto">
              Subscribe
            </Button>
          </form>
        )}
        <p className="text-[10px] text-[#6B645C] mt-4 tracking-wider">We respect your inbox. Unsubscribe anytime.</p>
      </div>
    </section>
  );
};

export default Newsletter;

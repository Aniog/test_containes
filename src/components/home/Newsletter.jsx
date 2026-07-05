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
      }, 2500);
    }
  };

  return (
    <section className="newsletter-block py-20">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="heading-serif text-3xl text-white mb-3">Join for 10% off your first order</h2>
        <p className="text-white/60 text-sm mb-8 tracking-wide">
          Be the first to know about new arrivals, private sales, and styling stories.
        </p>

        {submitted ? (
          <p className="text-velmora-gold py-4">Thank you. Welcome to the circle.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="newsletter-input"
              required
            />
            <button 
              type="submit"
              className="btn btn-primary whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
        
        <p className="text-[10px] text-white/40 mt-4 tracking-widest">
          WE RESPECT YOUR INBOX. UNSUBSCRIBE ANYTIME.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
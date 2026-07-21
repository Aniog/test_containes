import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="section bg-[#c9a962]">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-4">
            Join for 10% Off
          </h2>
          <p className="text-[#1a1a1a]/70 mb-8">
            Subscribe to our newsletter and receive 10% off your first order.
            Be the first to know about new collections and exclusive offers.
          </p>
          
          {submitted ? (
            <p className="text-[#1a1a1a] font-serif text-lg">
              Thank you for subscribing!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-[#faf8f5] border border-[#1a1a1a]/10 text-[#1a1a1a] placeholder-[#1a1a1a]/40 focus:outline-none focus:border-[#1a1a1a]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#1a1a1a] text-[#faf8f5] text-sm tracking-wider uppercase hover:bg-[#1a1a1a]/80 transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

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
    <section className="py-16 md:py-24 bg-[#C9A962]">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#0D0D0D] tracking-wide">
            Join for 10% Off
          </h2>
          <p className="mt-4 text-[#0D0D0D]/70">
            Subscribe to our newsletter and receive 10% off your first order.
            Be the first to know about new collections and exclusive offers.
          </p>

          {submitted ? (
            <div className="mt-8 p-4 bg-[#0D0D0D] text-[#C9A962]">
              Thank you for subscribing! Check your email for your discount code.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-transparent border border-[#0D0D0D]/30 text-[#0D0D0D] placeholder-[#0D0D0D]/50 focus:outline-none focus:border-[#0D0D0D]"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[#0D0D0D] text-[#C9A962] text-sm font-medium uppercase tracking-wider hover:bg-[#0D0D0D]/90 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-[#0D0D0D]/60">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
}

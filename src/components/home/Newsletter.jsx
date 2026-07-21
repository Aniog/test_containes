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
    <section className="section bg-[#C9A962]">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Join for 10% Off
          </h2>
          <p className="text-white/80 mb-8">
            Subscribe to our newsletter and receive 10% off your first order.
            Be the first to know about new collections and exclusive offers.
          </p>

          {submitted ? (
            <div className="text-white text-lg">
              Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white"
              />
              <button 
                type="submit"
                className="px-8 py-3 bg-white text-[#C9A962] font-medium tracking-wide uppercase hover:bg-white/90 transition-colors"
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

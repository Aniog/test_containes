import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#B8860B]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-white tracking-wide mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-white/90 text-sm tracking-wide mb-8 max-w-md mx-auto">
          Be the first to know about new collections, exclusive offers, and the stories behind our pieces.
        </p>

        {submitted ? (
          <p className="text-white font-medium text-lg">
            Thank you for subscribing! Check your inbox for your welcome gift.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-4 bg-white/10 border border-white/30 text-white placeholder-white/60 text-sm tracking-wide focus:outline-none focus:border-white transition-colors duration-300"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#1A1A1A] text-white text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#2A2A2A] transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-white/60 text-xs mt-4 tracking-wide">
          By subscribing, you agree to our Privacy Policy and consent to receive updates.
        </p>
      </div>
    </section>
  );
}

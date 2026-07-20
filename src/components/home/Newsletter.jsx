import { useState } from 'react';

const Newsletter = () => {
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
    <section className="py-16 md:py-24 bg-[#1A1A1A]">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center" style={{ color: '#FAF7F2' }}>
        <h2 className="font-serif text-3xl md:text-4xl font-light">
          Join the Velmora World
        </h2>
        <p className="mt-3 text-sm font-sans" style={{ color: '#9A9A9A' }}>
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="mt-8 text-sm text-[#B8860B] font-sans font-medium">
            Thank you! Check your inbox for your welcome gift.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-transparent border border-white/20 text-[#FAF7F2] text-sm font-sans placeholder:text-[#9A9A9A] focus:outline-none focus:border-[#B8860B] transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-[#B8860B] text-white px-6 py-3 text-xs font-sans font-medium tracking-widest uppercase hover:bg-[#D4A843] transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;

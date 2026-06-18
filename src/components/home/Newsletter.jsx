import { useState } from 'react';

const Newsletter = () => {
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
    <section className="py-16 md:py-24 bg-gold-light">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
          Join the Inner Circle
        </h2>
        <p className="mt-3 text-sm text-warm-gray">
          Be the first to know about new arrivals, exclusive offers, and styling tips. Get 10% off your first order.
        </p>

        {submitted ? (
          <div className="mt-8 py-4">
            <p className="font-serif text-lg text-charcoal">Welcome to Velmora ✦</p>
            <p className="text-sm text-warm-gray mt-1">Check your inbox for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-white border border-hairline text-sm text-charcoal placeholder:text-warm-gray/60 focus:outline-none focus:border-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gold text-white text-xs uppercase tracking-[0.15em] font-medium hover:bg-gold-dark transition-colors duration-300 whitespace-nowrap"
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

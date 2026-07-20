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
    <section className="py-16 md:py-24 bg-espresso">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white">
          Join the Velmora World
        </h2>
        <p className="mt-4 text-sm text-white/60 leading-relaxed">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration. 
          Get 10% off your first order when you subscribe.
        </p>

        {submitted ? (
          <div className="mt-8">
            <p className="text-sm text-gold">Thank you for subscribing! Check your inbox for your welcome offer.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 text-sm focus:border-gold focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-gold text-white px-8 py-3 uppercase tracking-widest text-xs font-medium hover:bg-gold-light transition-colors whitespace-nowrap"
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

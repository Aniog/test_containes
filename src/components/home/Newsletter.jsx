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
    <section className="py-16 md:py-20" style={{ backgroundColor: '#1C1917' }}>
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl" style={{ color: '#ffffff' }}>
          Join the Inner Circle
        </h2>
        <p className="mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="mt-8 text-gold text-sm font-medium">
            Welcome to Velmora. Check your inbox for your discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold transition-colors"
              required
            />
            <button
              type="submit"
              className="text-xs uppercase tracking-btn font-medium px-8 py-3 hover:opacity-90 transition-opacity duration-300 border-none cursor-pointer"
              style={{ backgroundColor: '#B8860B', color: '#ffffff' }}
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

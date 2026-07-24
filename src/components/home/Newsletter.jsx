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
    <section className="py-16 md:py-24 bg-gold-500">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
          Join the Velmora Circle
        </h2>
        <p className="font-sans text-sm text-white/80 mb-8">
          Subscribe for 10% off your first order, plus exclusive access to new arrivals and private sales.
        </p>

        {submitted ? (
          <div className="bg-white/10 backdrop-blur-sm py-4 px-6 inline-block">
            <p className="font-sans text-sm text-white tracking-wide">
              Welcome to the circle. Check your inbox for your 10% off code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 font-sans text-sm focus:outline-none focus:border-white/60 transition-colors"
            />
            <button
              type="submit"
              className="bg-white text-gold-600 px-6 py-3 font-sans text-xs font-medium tracking-widest uppercase hover:bg-cream-50 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="font-sans text-[10px] text-white/50 mt-4 tracking-wide">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

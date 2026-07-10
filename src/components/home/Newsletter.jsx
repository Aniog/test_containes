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
    <section className="py-20 md:py-24 bg-velmora-gold">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="font-sans text-white/80 mb-8">
          Subscribe to receive exclusive offers and be the first to know about new collections.
        </p>
        
        {submitted ? (
          <div className="bg-white/20 py-4 px-6 inline-block">
            <p className="font-sans text-white">Thank you for subscribing!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 font-sans text-sm bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-velmora-charcoal text-white font-sans text-sm uppercase tracking-widest hover:bg-velmora-charcoal/80 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

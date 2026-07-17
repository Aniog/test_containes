import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 md:py-28 bg-velmora-charcoal">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs tracking-widest text-velmora-gold uppercase">Stay in the Loop</span>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl text-velmora-cream">
          Join for 10% Off
        </h2>
        <p className="mt-4 text-velmora-cream/60 max-w-md mx-auto">
          Subscribe to our newsletter and receive 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {isSubmitted ? (
          <div className="mt-8 p-4 bg-velmora-gold/20 border border-velmora-gold/30">
            <p className="text-velmora-gold">Thank you for subscribing! Check your email for your discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-transparent border border-velmora-cream/30 text-velmora-cream placeholder-velmora-cream/40 focus:border-velmora-gold focus:outline-none transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-velmora-gold text-white text-sm tracking-widest hover:bg-velmora-goldDark transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-velmora-cream/40">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
        </p>
      </div>
    </section>
  );
}
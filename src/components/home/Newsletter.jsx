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
    <section className="py-20 bg-velmora-charcoal">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-cream">
          Join the Velmora Circle
        </h2>
        <p className="font-sans text-sm text-velmora-cream/60 mt-3 max-w-md mx-auto">
          Subscribe to receive 10% off your first order, exclusive access to new collections, and styling inspiration.
        </p>

        {submitted ? (
          <div className="mt-8 p-4 bg-velmora-gold/20 border border-velmora-gold/30">
            <p className="font-sans text-sm text-velmora-gold">
              Thank you for subscribing! Check your email for your discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 bg-transparent border border-velmora-cream/30 text-velmora-cream placeholder-velmora-cream/40 font-sans text-sm focus:outline-none focus:border-velmora-gold transition-colors"
              required
            />
            <button 
              type="submit"
              className="px-8 py-3 bg-velmora-gold text-velmora-charcoal font-sans text-sm tracking-widest uppercase hover:bg-velmora-goldLight transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="font-sans text-xs text-velmora-cream/40 mt-4">
          By subscribing, you agree to our Privacy Policy and consent to receive updates.
        </p>
      </div>
    </section>
  );
}
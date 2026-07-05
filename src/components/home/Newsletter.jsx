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
    <section className="py-16 md:py-24 bg-velmora-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
            Join the Velmora Circle
          </h2>
          <p className="text-white/60 mb-8">
            Subscribe and receive 10% off your first order, plus early access to new collections and exclusive offers.
          </p>

          {submitted ? (
            <div className="bg-velmora-gold/20 border border-velmora-gold/30 px-6 py-4">
              <p className="text-velmora-gold">Thank you for joining! Check your email for your discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-velmora-gold hover:bg-velmora-goldDark text-white text-sm tracking-widest uppercase transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-white/40 text-xs mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
          </p>
        </div>
      </div>
    </section>
  );
}
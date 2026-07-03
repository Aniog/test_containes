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
    <section className="py-16 md:py-24 bg-velmora-charcoal">
      <div className="container-main">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-cream mb-3">
            Join the Velmora Circle
          </h2>
          <p className="text-velmora-cream/70 mb-8">
            Subscribe and receive 10% off your first order, plus exclusive access to new collections and private sales.
          </p>

          {isSubmitted ? (
            <div className="bg-velmora-gold/20 text-velmora-gold px-6 py-4">
              <p className="font-medium">Thank you for subscribing!</p>
              <p className="text-sm mt-1">Check your email for your 10% discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3 bg-transparent border border-velmora-cream/30 text-velmora-cream placeholder:text-velmora-cream/50 focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-velmora-gold text-velmora-charcoal font-sans text-sm font-medium tracking-wider uppercase hover:bg-velmora-gold-light transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-xs text-velmora-cream/50 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
          </p>
        </div>
      </div>
    </section>
  );
}
import { useState } from 'react';

const Newsletter = () => {
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
    <section className="py-16 md:py-24 bg-velmora-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-3">
            Join the Velmora Circle
          </h2>
          <p className="text-velmora-charcoal/80 mb-6">
            Subscribe and receive 10% off your first order, plus early access to new collections and exclusive offers.
          </p>

          {isSubmitted ? (
            <div className="bg-velmora-cream text-velmora-charcoal py-4 px-6">
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
                className="flex-1 px-4 py-3 bg-velmora-cream text-velmora-charcoal placeholder:text-velmora-warm-gray focus:outline-none focus:ring-2 focus:ring-velmora-charcoal/20"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-velmora-charcoal text-velmora-cream font-medium hover:bg-velmora-charcoal/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-xs text-velmora-charcoal/70 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
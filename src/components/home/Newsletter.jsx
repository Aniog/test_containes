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
    <section className="py-20 lg:py-28 bg-velmora-charcoal">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl lg:text-5xl text-velmora-cream mb-4">
          Join the Velmora Circle
        </h2>
        <div className="hairline max-w-16 mx-auto mb-4 bg-velmora-gold/50" />
        <p className="text-velmora-cream/70 mb-8 max-w-lg mx-auto">
          Subscribe to receive 10% off your first order, plus exclusive access to new collections and private sales.
        </p>

        {isSubmitted ? (
          <div className="bg-velmora-gold/20 border border-velmora-gold/30 p-4 text-velmora-gold">
            Thank you for joining! Check your email for your exclusive discount code.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-transparent border border-velmora-cream/30 text-velmora-cream placeholder-velmora-cream/50 focus:outline-none focus:border-velmora-gold transition-colors"
              required
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-velmora-gold text-white uppercase tracking-widest text-xs hover:bg-velmora-goldLight transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-xs text-velmora-cream/50 mt-4">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
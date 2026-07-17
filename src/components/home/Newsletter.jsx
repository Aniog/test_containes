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
    <section className="section-padding bg-velmora-charcoal">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-cream mb-4">
            Join the Velmora Circle
          </h2>
          <p className="text-velmora-cream/70 mb-8">
            Subscribe for 10% off your first order and exclusive access to new collections.
          </p>

          {isSubmitted ? (
            <div className="bg-velmora-gold/20 border border-velmora-gold/30 p-4">
              <p className="text-velmora-gold">Thank you for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-transparent border border-velmora-cream/30 text-velmora-cream placeholder:text-velmora-cream/50 focus:outline-none focus:border-velmora-gold transition-colors"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-velmora-gold text-velmora-charcoal uppercase tracking-widest text-sm hover:bg-velmora-cream transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-xs text-velmora-cream/50 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
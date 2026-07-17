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
    <section className="section-padding bg-gold py-16">
      <div className="container-main">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
            Join for 10% Off
          </h2>
          <p className="font-sans text-cream/80 mb-8">
            Subscribe to our newsletter and receive 10% off your first order.
          </p>

          {isSubmitted ? (
            <div className="bg-cream/10 p-4 rounded-sm">
              <p className="font-sans text-cream">
                Thank you for subscribing! Check your email for your discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-cream text-charcoal font-sans text-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-cream"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-charcoal text-cream font-sans text-sm font-medium tracking-wide rounded-sm hover:bg-charcoal/80 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="font-sans text-xs text-cream/60 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
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
    <section className="py-16 md:py-24 bg-velmora-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Join the Velmora Circle
          </h2>
          <p className="mt-4 text-velmora-taupe font-sans">
            Subscribe to receive 10% off your first order and be the first to know about new arrivals.
          </p>

          {isSubmitted ? (
            <div className="mt-6 p-4 bg-velmora-gold/20 text-charcoal">
              <p className="font-sans">Thank you for subscribing! Check your email for your discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 bg-cream border border-velmora-sand focus:border-velmora-gold focus:outline-none font-sans"
                />
                <button
                  type="submit"
                  className="btn-primary bg-charcoal hover:bg-velmora-goldDark whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-3 text-xs text-velmora-taupe">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
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
    <section className="py-20 bg-velmora-gold/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
          Join the Velmora Circle
        </h2>
        <p className="text-velmora-gray mb-8 max-w-xl mx-auto">
          Subscribe to receive 10% off your first order, plus exclusive access to new collections and private sales.
        </p>

        {submitted ? (
          <div className="bg-velmora-gold/20 py-4 px-6 inline-block">
            <p className="text-velmora-charcoal font-semibold">
              Thank you for subscribing!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-velmora-cream border border-velmora-taupe text-velmora-charcoal placeholder:text-velmora-gray focus:outline-none focus:border-velmora-gold transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-velmora-gold text-velmora-charcoal font-semibold tracking-wide hover:bg-velmora-charcoal hover:text-velmora-cream transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
        )}

        <p className="text-velmora-gray text-sm mt-4">
          By subscribing, you agree to our Privacy Policy and consent to receive updates.
        </p>
      </div>
    </section>
  );
}
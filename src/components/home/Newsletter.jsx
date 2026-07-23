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
    <section className="section bg-[var(--color-charcoal)]">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-cream)] mb-4">
            Join the Velmora Circle
          </h2>
          <p className="text-[var(--color-taupe)] mb-8">
            Subscribe for 10% off your first order and exclusive access to new collections.
          </p>

          {isSubmitted ? (
            <div className="bg-[var(--color-gold)]/20 text-[var(--color-gold)] py-4 px-6">
              Thank you for subscribing! Check your email for your discount code.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-transparent border border-[var(--color-taupe)] text-[var(--color-cream)] placeholder:text-[var(--color-taupe)] focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                required
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-xs text-[var(--color-taupe)] mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
}
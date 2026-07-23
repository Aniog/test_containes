import { useState } from 'react';

const Newsletter = () => {
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
    <section 
      className="py-16 md:py-24"
      style={{ backgroundColor: 'var(--color-ivory)' }}
    >
      <div className="container-narrow">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl" style={{ color: 'var(--color-charcoal)' }}>
            Join the Velmora Circle
          </h2>
          <p className="mt-3 text-sm" style={{ color: 'var(--color-muted)' }}>
            Subscribe for 10% off your first order and exclusive access to new collections.
          </p>

          {submitted ? (
            <div className="mt-6 p-4 bg-[var(--color-charcoal)] text-white">
              <p className="font-serif">Thank you for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input-field flex-1"
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

          <p className="mt-4 text-xs" style={{ color: 'var(--color-muted)' }}>
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
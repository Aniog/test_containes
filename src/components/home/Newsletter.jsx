import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    // Placeholder
  };

  return (
    <section className="bg-velmora-accent-light">
      <div className="container-site py-16 md:py-20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="heading-sm mb-3">Join for 10% off your first order</h2>
          <p className="body-text mb-8">
            Be the first to discover new collections, exclusive offers, and styling inspiration.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3.5 bg-white border border-velmora-muted-2 text-velmora-base font-sans text-sm placeholder:text-velmora-base/40 focus:outline-none focus:border-velmora-accent transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

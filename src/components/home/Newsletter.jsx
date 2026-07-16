import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSent(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-clay">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="serif-heading text-xl md:text-3xl text-espresso">
            Join for 10% off your first order
          </h2>
          <p className="text-xs md:text-sm text-taupe mt-3 mb-6 md:mb-8">
            Be the first to know about new arrivals, exclusive offers, and behind-the-scenes stories.
          </p>

          {sent ? (
            <p className="text-sm text-espresso font-medium">Thank you — check your inbox for your code.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-white border border-warm-sand px-4 py-2.5 md:py-3 text-sm text-espresso placeholder:text-taupe focus:outline-none focus:border-accent transition-colors"
              />
              <button type="submit" className="btn-primary whitespace-nowrap text-xs sm:text-sm px-6 sm:px-8 py-2.5 sm:py-3">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

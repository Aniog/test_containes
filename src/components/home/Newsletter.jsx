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
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="bg-bg-dark rounded-lg px-6 md:px-16 py-12 md:py-16 text-center">
          <p className="text-text-accent text-xs uppercase tracking-[0.2em] font-medium mb-3">
            Join the Velmora Circle
          </p>
          <h2 className="font-serif text-2xl md:text-4xl text-text-inverse mb-3">
            10% Off Your First Order
          </h2>
          <p className="text-text-muted text-sm max-w-md mx-auto mb-8">
            Be the first to discover new collections, exclusive offers, and styling inspiration.
          </p>

          {submitted ? (
            <p className="text-text-accent font-serif text-lg">
              Welcome to the Velmora family.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-text-inverse placeholder:text-text-muted text-sm focus:outline-none focus:border-text-accent transition-colors duration-300"
              />
              <button
                type="submit"
                className="btn-primary bg-bg-accent hover:bg-bg-accent-hover whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

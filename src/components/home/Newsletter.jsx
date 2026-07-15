import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-deepbrown">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase text-gold font-sans mb-4">Join Velmora</p>
          <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl font-light text-cream mb-4">
            10% Off Your First Order
          </h2>
          <p className="text-cream/60 font-sans text-sm leading-relaxed mb-8">
            Subscribe to receive early access to new collections, exclusive offers, and styling inspiration from our atelier.
          </p>

          {submitted ? (
            <p className="text-gold font-serif text-lg italic">
              Welcome to Velmora. Check your inbox for your discount code.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-3 bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 font-sans text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button type="submit" className="btn-accent whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

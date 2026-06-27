import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 md:py-28 bg-velmora-gold-light">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-4 tracking-wide">Join Velmora</h2>
        <p className="text-velmora-text-secondary mb-8">
          Sign up and enjoy <span className="text-velmora-text font-medium">10% off</span> your first order. 
          Be the first to discover new arrivals and exclusive offers.
        </p>

        {submitted ? (
          <p className="text-velmora-success text-sm font-medium">
            Thank you! Check your inbox for your discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-white border border-velmora-divider px-4 py-3 text-sm placeholder:text-velmora-text-muted focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-white px-6 py-3 text-sm tracking-[0.12em] uppercase hover:bg-velmora-gold-hover transition-colors duration-300 flex-shrink-0"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="bg-velmora-dark py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark-text mb-3">
          Join for 10% Off
        </h2>
        <p className="text-velmora-muted text-base md:text-lg mb-8">
          Your first order, on us. Plus early access to new collections and exclusive offers.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 bg-transparent border border-velmora-border-thin/50 text-velmora-dark-text placeholder-velmora-muted px-4 py-3 text-sm focus:outline-none focus:border-velmora-accent transition-colors"
            required
          />
          <button
            type="submit"
            className="bg-velmora-accent text-white px-6 py-3 text-sm tracking-widest uppercase hover:bg-velmora-accent-hover transition-colors flex items-center justify-center gap-2"
          >
            {submitted ? 'Welcome!' : 'Subscribe'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-velmora-muted text-xs mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;

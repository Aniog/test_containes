import { useState } from 'react';
import { Mail } from 'lucide-react';

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
    <section className="py-16 md:py-24 bg-brand-charcoal">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <Mail className="w-8 h-8 text-brand-gold mx-auto mb-4" />
        <h2 className="font-serif text-3xl md:text-4xl text-brand-cream font-light">
          Join the Inner Circle
        </h2>
        <p className="mt-3 text-sm text-brand-taupe font-sans">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="mt-8 text-sm text-brand-gold font-sans font-medium">
            Welcome to Velmora. Check your inbox for your discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-brand-espresso border border-brand-muted/40 rounded-sm text-sm text-brand-cream font-sans placeholder:text-brand-taupe/70 focus:outline-none focus:border-brand-gold transition-colors"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-brand-gold text-white text-sm font-sans font-medium uppercase tracking-wide-xl rounded-sm hover:bg-brand-gold-dark transition-colors duration-300 border-none cursor-pointer whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;

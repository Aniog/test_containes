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
    <section className="py-16 md:py-24 bg-espresso">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <Mail className="w-8 h-8 text-gold mx-auto mb-4" />
        <h2 className="font-serif text-3xl md:text-4xl font-light text-cream">
          Join the Inner Circle
        </h2>
        <p className="text-cream/60 text-sm mt-3">
          Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
        </p>

        {submitted ? (
          <p className="mt-8 text-gold text-sm uppercase tracking-wide">
            Welcome to Velmora. Check your inbox for your discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-transparent border border-cream/20 text-cream placeholder:text-cream/40 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-gold text-cream px-6 py-3 uppercase tracking-widest text-xs font-medium hover:bg-gold-light transition-colors duration-300 whitespace-nowrap"
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

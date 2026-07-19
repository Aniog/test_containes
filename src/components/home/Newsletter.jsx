import { useState } from 'react';
import { Send } from 'lucide-react';

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
    <section className="py-16 md:py-24 bg-charcoal">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-cream">
          Join the Inner Circle
        </h2>
        <p className="mt-4 text-cream/60 font-sans text-sm">
          Be the first to know about new arrivals, exclusive offers, and receive 10% off your first order.
        </p>

        {submitted ? (
          <p className="mt-8 text-gold font-sans text-sm font-medium">
            Welcome to Velmora. Check your inbox for your 10% off code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-cream/10 border border-cream/20 rounded-sm text-cream font-sans text-sm placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gold text-cream font-sans text-sm font-medium uppercase tracking-wider border-none rounded-sm hover:bg-gold-dark transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;

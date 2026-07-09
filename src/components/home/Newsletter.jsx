import { useState } from 'react';
import { Mail } from 'lucide-react';

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
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="bg-charcoal rounded-sm px-6 md:px-16 py-12 md:py-16 text-center">
          <Mail size={28} className="text-gold mx-auto mb-4" />
          <h2 className="font-serif text-2xl md:text-3xl text-cream">
            Join the Velmora World
          </h2>
          <p className="mt-3 text-sm text-cream/70 max-w-md mx-auto">
            Be the first to know about new collections, exclusive offers, and styling inspiration. 
            Get 10% off your first order.
          </p>

          {submitted ? (
            <p className="mt-6 text-sm text-gold font-medium">
              Welcome to Velmora! Check your inbox for your 10% discount.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold hover:bg-gold-dark text-cream px-6 py-3 text-sm font-medium uppercase tracking-wider transition-colors duration-200"
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

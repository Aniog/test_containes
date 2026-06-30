import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
    <section className="py-20 md:py-28 bg-stone-900">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-white">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-sm text-stone-400 tracking-wide">
          Subscribe to receive 10% off your first order, plus early access to new collections and exclusive offers.
        </p>
        <div className="w-12 h-px bg-gold mx-auto mt-6 mb-8" />

        {submitted ? (
          <p className="text-sm text-gold-light tracking-wide">
            Welcome to Velmora! Check your inbox for your 10% discount code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-stone-800 border border-stone-700 text-white text-sm px-4 py-3 placeholder-stone-500 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-white text-xs tracking-super-wide uppercase font-medium px-6 py-3 hover:bg-gold-dark transition-colors flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

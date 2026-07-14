import { useState } from 'react';
import { Check } from 'lucide-react';

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
    <section className="py-16 md:py-20 bg-espresso">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-sand-50 tracking-wide mb-3">
          Join for 10% Off
        </h2>
        <p className="font-sans text-sm text-sand-50/50 mb-8">
          Subscribe to the Velmora newsletter for exclusive offers, new arrivals, and styling inspiration.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-gold">
            <Check className="w-5 h-5" />
            <span className="font-sans text-sm tracking-wide">Welcome to Velmora. Check your inbox.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-espresso-light border border-sand-50/10 text-sand-50 text-sm px-4 py-3 placeholder:text-sand-50/30 focus:outline-none focus:border-gold/50 transition-colors"
            />
            <button type="submit" className="bg-gold text-white text-xs tracking-widest uppercase px-6 py-3 hover:bg-gold-dark transition-colors duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

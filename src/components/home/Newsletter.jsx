import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
    <section className="bg-charcoal text-cream">
      <div className="max-w-[800px] mx-auto px-6 py-20 lg:py-28 text-center">
        <h2 className="font-serif text-3xl lg:text-4xl mb-4 text-white">
          Join for 10% off your first order
        </h2>
        <p className="text-cream/60 text-sm mb-8 tracking-wide">
          Early access to new drops, exclusive offers, and styling inspiration — delivered with care.
        </p>

        {submitted ? (
          <p className="text-gold font-serif text-lg animate-fade-in">
            Welcome to Velmora. Your code is on its way.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex items-center max-w-md mx-auto border-b border-cream/30 focus-within:border-gold transition-colors">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-transparent py-3 px-0 text-sm text-cream placeholder-cream/40 outline-none"
            />
            <button type="submit" className="p-3 text-gold hover:text-gold-light transition-colors" aria-label="Subscribe">
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

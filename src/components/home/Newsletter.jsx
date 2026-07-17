import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

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
    <section className="py-16 md:py-24 px-6 bg-espresso-800">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs tracking-widest uppercase text-gold-400 mb-4 font-sans font-medium">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream font-light mb-3">
          {submitted ? "You're on the list" : '10% off your first order'}
        </h2>
        <p className="text-espresso-300 mb-8 font-sans">
          {submitted
            ? 'Welcome to Velmora. Your welcome code is on its way.'
            : 'Sign up for early access to new collections, exclusive offers, and styling inspiration.'}
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3 bg-espresso-700 border border-espresso-600 text-cream placeholder-espresso-400 text-sm rounded-sm focus:outline-none focus:border-gold-400 transition-colors font-sans"
            />
            <button type="submit" className="btn-gold text-xs px-6 py-3 whitespace-nowrap">
              <span className="flex items-center gap-2">
                Subscribe <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </form>
        ) : (
          <div className="inline-flex items-center gap-2 text-gold-400">
            <Check className="w-5 h-5" />
            <span className="font-sans text-sm">Thank you for subscribing</span>
          </div>
        )}
      </div>
    </section>
  );
}

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
    <section className="py-20 md:py-28 bg-charcoal-900">
      <div className="container-narrow text-center">
        <p className="text-label text-gold-400 mb-4">Stay Connected</p>
        <h2 className="heading-section text-cream-50 mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-charcoal-300 text-sm max-w-md mx-auto mb-10">
          Be the first to discover new collections, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-gold-400">
            <Check size={20} />
            <span className="text-sm font-medium tracking-wide">Welcome to the Velmora family</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-4 bg-charcoal-800 border border-charcoal-700 text-cream-100 placeholder-charcoal-400 text-sm focus:outline-none focus:border-gold-500 transition-colors"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white text-xs font-medium tracking-ultra-wide uppercase transition-colors"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

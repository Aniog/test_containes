import { useState } from 'react';
import { Send } from 'lucide-react';

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
    <section className="py-16 md:py-24 bg-walnut-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold-400 mb-4">
          Stay in Touch
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream-100 tracking-wide mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="font-sans text-sm text-cream-400 mb-8 max-w-md mx-auto">
          Be the first to know about new arrivals, exclusive offers, and styling inspiration.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-gold-400">
            <span className="font-sans text-sm">Thank you! Check your inbox for your welcome gift.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-walnut-800 border border-walnut-700 text-cream-100 font-sans text-sm placeholder:text-walnut-500 focus:border-gold-600 transition-colors"
            />
            <button
              type="submit"
              className="btn-gold flex items-center justify-center gap-2 px-6 py-3.5 text-xs"
            >
              Subscribe
              <Send size={14} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

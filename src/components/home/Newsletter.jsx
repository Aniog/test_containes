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
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="bg-charcoal-900">
      <div className="section-padding py-16 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-400 mb-3">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream-50 mb-4">
            Join for 10% off your first order
          </h2>
          <p className="font-sans text-sm text-cream-300 mb-8 max-w-md mx-auto">
            Be the first to know about new collections, exclusive offers, and styling tips.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-charcoal-800 border border-charcoal-700 text-cream-50 placeholder:text-charcoal-400 font-sans text-sm focus:outline-none focus:border-gold-500 transition-colors"
            />
            <button
              type="submit"
              className="btn-gold flex items-center justify-center gap-2 px-6"
            >
              <Send className="w-4 h-4" strokeWidth={1.5} />
              <span className="sm:hidden">Subscribe</span>
            </button>
          </form>

          {submitted && (
            <p className="font-sans text-sm text-gold-400 mt-4 animate-fade-in">
              Welcome to Velmora! Check your inbox for your discount code.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

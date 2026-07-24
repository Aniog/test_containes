import { useState } from 'react';
import { Send } from 'lucide-react';

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
    <section className="py-16 md:py-20 bg-charcoal-800">
      <div className="container-narrow">
        <div className="max-w-xl mx-auto text-center">
          <div className="hairline mx-auto mb-6" />
          <h2 className="heading-section text-cream-100 mb-3" id="newsletter-title">
            Join the Velmora Circle
          </h2>
          <p className="text-sm text-charcoal-300 mb-8" id="newsletter-subtitle">
            Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
          </p>

          {submitted ? (
            <div className="animate-fade-in">
              <p className="text-sm text-gold-400 font-medium">
                Welcome to the circle. Check your inbox for your 10% off code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 bg-charcoal-700 border border-charcoal-600 text-cream-100 text-sm placeholder-charcoal-400 focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button type="submit" className="btn-gold flex items-center justify-center gap-2 whitespace-nowrap">
                <Send className="w-3.5 h-3.5" />
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

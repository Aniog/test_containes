import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function NewsletterSection() {
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
    <section className="py-16 md:py-24 bg-gold">
      <div className="container-main">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-base mb-3">
            Join the Inner Circle
          </h2>
          <p className="font-sans text-sm text-base/80 mb-8">
            Be the first to know about new drops, exclusive offers, and styling
            inspiration. Plus, get 10% off your first order.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-base">
              <Check className="w-5 h-5" />
              <span className="font-sans text-sm font-medium">
                Thank you! Check your inbox for your code.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-transparent border-b-2 border-base/30 text-base placeholder:text-base/50 font-sans text-sm py-3 px-1 focus:outline-none focus:border-base transition-colors"
              />
              <button
                type="submit"
                className="bg-base text-text-inverse font-sans text-xs uppercase tracking-widest font-medium px-8 py-3 flex items-center justify-center gap-2 hover:bg-base/90 transition-colors"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

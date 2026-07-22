import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 md:py-28 bg-velmora-charcoal">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-cream">
            Join for 10% Off Your First Order
          </h2>
          <p className="mt-4 text-velmora-cream/70">
            Subscribe to our newsletter and be the first to know about new collections, exclusive offers, and styling inspiration.
          </p>

          {isSubmitted ? (
            <div className="mt-8 flex items-center justify-center gap-2 text-velmora-gold">
              <Check className="w-5 h-5" />
              <span>Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-velmora-gray" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 bg-velmora-cream border border-velmora-border focus:border-velmora-gold outline-none transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-velmora-gold hover:bg-velmora-gold-hover text-velmora-charcoal font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-velmora-cream/50">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
          </p>
        </div>
      </div>
    </section>
  );
}
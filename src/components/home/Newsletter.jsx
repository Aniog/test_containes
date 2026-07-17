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
    <section className="py-20 lg:py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-espresso py-16 lg:py-20 px-8 lg:px-16 text-center">
          {submitted ? (
            <div className="max-w-md mx-auto animate-fade-in">
              <p className="font-serif text-2xl tracking-widest uppercase text-cream mb-3">
                Thank You
              </p>
              <p className="text-cream-200 text-sm">
                Your 10% discount code has been sent to your inbox. Welcome to Velmora.
              </p>
            </div>
          ) : (
            <div className="max-w-md mx-auto">
              <h2 className="font-serif text-2xl lg:text-3xl tracking-widest uppercase text-cream">
                Join for 10% Off
              </h2>
              <p className="mt-3 text-cream-200 text-sm">
                Sign up for early access to new collections, exclusive offers, and a 10% discount on your first order.
              </p>
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 bg-transparent border-b border-cream-200/30 py-3 px-2 text-cream text-sm placeholder:text-cream-300 focus:outline-none focus:border-gold transition-colors"
                />
                <button
                  type="submit"
                  className="bg-gold text-cream px-6 py-3 text-xs uppercase tracking-super font-medium hover:bg-gold-500 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Subscribe
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

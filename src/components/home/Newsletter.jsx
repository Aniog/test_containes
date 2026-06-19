import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Simulate submission
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-16 sm:py-24 bg-gold-500">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {isSubmitted ? (
          <div className="animate-fade-in">
            <div className="w-16 h-16 bg-cream-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-gold-500" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-cream-50 mb-4">
              Welcome to Velmora
            </h3>
            <p className="text-gold-100">
              Check your inbox for your 10% off code. We can't wait to have you!
            </p>
          </div>
        ) : (
          <>
            <p className="text-xs tracking-ultra-wide uppercase text-cream-50/70 mb-4">
              Stay Connected
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-cream-50 mb-4">
              Join for 10% off your first order
            </h2>
            <p className="text-gold-100 mb-8 max-w-md mx-auto">
              Subscribe to receive exclusive offers, early access to new collections, 
              and styling inspiration delivered straight to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-cream-50 text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-cream-100"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-charcoal-800 text-cream-50 text-sm tracking-wider uppercase hover:bg-charcoal-900 transition-colors flex items-center justify-center gap-2"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {error && (
                <p className="text-cream-50 text-sm mt-3">{error}</p>
              )}
            </form>

            <p className="text-xs text-cream-50/60 mt-6">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
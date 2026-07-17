import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const NewsletterSection = () => {
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
    <section className="py-20 sm:py-24 lg:py-32 bg-gold-500">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {isSubmitted ? (
          <>
            <span className="text-4xl mb-4 block">✦</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-charcoal-900">
              Welcome to Velmora
            </h2>
            <p className="mt-4 font-sans text-base text-charcoal-900/80">
              Check your inbox for your exclusive 10% discount code.
            </p>
          </>
        ) : (
          <>
            <span className="font-serif text-5xl text-charcoal-900/20">✦</span>
            <h2 className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal-900">
              Join for 10% Off
            </h2>
            <p className="mt-4 font-sans text-base text-charcoal-900/80 max-w-md mx-auto">
              Be the first to know about new collections, exclusive offers, and styling inspiration.
            </p>

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 bg-cream-50 border border-charcoal-900/10 font-sans text-sm text-charcoal-900 placeholder:text-charcoal-800/50 focus:outline-none focus:border-charcoal-900 transition-colors"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-charcoal-900 text-cream-50 font-sans text-sm font-medium tracking-wider uppercase hover:bg-charcoal-800 transition-colors flex items-center justify-center gap-2"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            <p className="mt-4 font-sans text-xs text-charcoal-900/60">
              By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;

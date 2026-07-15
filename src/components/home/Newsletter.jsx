import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    console.log('Newsletter signup:', email);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-16 lg:py-24 bg-brand-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white mb-4">
          Join for 10% off your first order
        </h2>
        <p className="text-brand-100 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for exclusive offers, styling tips, and early access to new collections.
        </p>

        {isSubmitted ? (
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
            <p className="text-white font-serif text-lg">
              Thank you for subscribing! Check your email for your 10% discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <button
                type="submit"
                className="bg-neutral-900 hover:bg-neutral-800 text-white font-semibold px-6 py-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-brand-200 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
import { useState } from 'react';
import { Check } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');
  };

  return (
    <section className="py-20 lg:py-28 bg-gold-500">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {isSubmitted ? (
          <div className="animate-fade-in">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-charcoal-900 flex items-center justify-center">
              <Check size={32} className="text-gold-400" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 mb-3">
              Welcome to Velmora
            </h3>
            <p className="font-sans text-sm text-charcoal-800">
              Check your inbox for your 10% discount code. We can't wait to have you.
            </p>
          </div>
        ) : (
          <>
            <p className="font-sans text-xs tracking-extra-wide uppercase text-charcoal-800/70 mb-4">
              Join the Circle
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal-900 mb-4">
              Get 10% Off Your First Order
            </h2>
            <p className="font-sans text-sm text-charcoal-800/80 mb-8 max-w-md mx-auto">
              Subscribe for exclusive access to new arrivals, styling tips, and member-only offers.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-4 bg-cream-50 border border-charcoal-800/20 font-sans text-sm text-charcoal-900 placeholder:text-charcoal-500 focus:border-charcoal-900 transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-4 bg-charcoal-900 text-cream-50 font-sans text-xs font-medium tracking-wider uppercase hover:bg-charcoal-800 transition-colors disabled:opacity-70"
              >
                {isLoading ? 'Joining...' : 'Subscribe'}
              </button>
            </form>
            <p className="font-sans text-xs text-charcoal-800/60 mt-4">
              No spam, unsubscribe anytime. View our privacy policy.
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default Newsletter;

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-velmora-charcoal">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-4 tracking-wide text-white">
          Join the Velmora Family
        </h2>
        <p className="text-velmora-gold text-sm tracking-widest uppercase mb-8">
          Get 10% Off Your First Order
        </p>
        <p className="text-gray-400 mb-10 leading-relaxed">
          Subscribe to our newsletter for exclusive access to new collections, styling tips,
          and special offers. Plus, enjoy 10% off your first purchase.
        </p>

        {isSubscribed ? (
          <div className="bg-green-900/30 border border-green-700 text-green-400 px-6 py-4 rounded">
            Thank you for subscribing! Check your email for your 10% discount code.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 bg-velmora-charcoal-light border border-velmora-charcoal-light text-white placeholder-gray-500 focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-gold hover:bg-velmora-gold-dark text-velmora-charcoal px-8 py-3 text-sm tracking-widest uppercase font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        )}

        <p className="text-xs text-gray-500 mt-6">
          By subscribing, you agree to our Privacy Policy and Terms of Service.
          Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
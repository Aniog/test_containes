import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 md:py-28 bg-espresso">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-gold-400 rounded-full">
          <Mail className="w-7 h-7 text-gold-400" />
        </div>

        {/* Content */}
        <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-4">
          Join the Velmora World
        </h2>
        <p className="text-warmgray mb-8 max-w-md mx-auto">
          Be the first to know about new collections, exclusive offers, and styling inspiration. Plus, enjoy 10% off your first order.
        </p>

        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-transparent border border-warmgray/30 px-6 py-4 text-ivory placeholder:text-warmgray/50 focus:outline-none focus:border-gold-400 transition-colors"
            />
            <button
              type="submit"
              className="bg-gold-500 hover:bg-gold-600 text-espresso px-8 py-4 text-xs uppercase tracking-ultra-wide font-medium transition-colors duration-300 whitespace-nowrap"
            >
              Get 10% Off
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-3 text-gold-400">
            <Check className="w-5 h-5" />
            <p className="text-lg">Welcome to Velmora! Check your inbox for your 10% code.</p>
          </div>
        )}

        {/* Privacy Note */}
        <p className="text-xs text-warmgray/60 mt-6">
          By subscribing, you agree to receive marketing emails from Velmora. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;

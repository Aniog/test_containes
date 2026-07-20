import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

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
    <section className="py-20 md:py-28 bg-charcoal-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="inline-flex items-center gap-2 mb-6">
          <Mail size={20} className="text-gold-400" />
          <span className="font-sans text-xs tracking-widest-2xl uppercase text-gold-400">
            Newsletter
          </span>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">
          Join for 10% Off
        </h2>
        <p className="text-charcoal-300 mb-10 max-w-lg mx-auto">
          Subscribe to receive exclusive offers, early access to new
          collections, and styling tips delivered to your inbox.
        </p>

        {submitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-xl text-gold-400 mb-2">
              Thank you for joining us
            </p>
            <p className="text-sm text-charcoal-300">
              Check your email for your exclusive discount code.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-4 bg-charcoal-700 border border-charcoal-600 text-white placeholder:text-charcoal-400 focus:outline-none focus:border-gold-500 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gold-500 text-white font-sans text-sm tracking-wider uppercase hover:bg-gold-600 transition-colors flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>
        )}

        <p className="text-xs text-charcoal-400 mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;

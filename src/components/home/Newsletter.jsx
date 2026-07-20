import { useState } from 'react';
import { Mail } from 'lucide-react';

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
    <section className="py-20 md:py-24 bg-velmora-gold">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="w-10 h-10 text-white/80 mx-auto mb-6" />
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          Join the Velmora Circle
        </h2>
        <p className="text-white/80 font-sans text-base mb-8 max-w-md mx-auto">
          Be the first to know about new collections, exclusive offers, and styling inspiration. 
          Plus, enjoy 10% off your first order.
        </p>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3 bg-white text-velmora-charcoal font-sans text-sm placeholder-velmora-text-muted focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-velmora-espresso text-white font-sans font-medium text-sm tracking-wide hover:bg-velmora-charcoal transition-colors whitespace-nowrap"
            >
              Get 10% Off
            </button>
          </form>
        ) : (
          <div className="bg-white/10 backdrop-blur-sm p-6 max-w-md mx-auto">
            <p className="text-white font-sans text-sm">
              Welcome to the Velmora Circle! Check your inbox for your 10% off code.
            </p>
          </div>
        )}

        <p className="text-xs text-white/60 font-sans mt-6">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

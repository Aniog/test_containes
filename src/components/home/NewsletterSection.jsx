import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
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
    <section className="py-20 lg:py-28 bg-gold-500">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="w-10 h-10 text-white/80 mx-auto mb-6" />
        
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          Join the Velmora Family
        </h2>
        <p className="text-white/80 mb-8 max-w-md mx-auto">
          Subscribe for 10% off your first order, exclusive access to new collections, 
          and styling inspiration delivered to your inbox.
        </p>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-5 py-3 bg-white text-warmblack placeholder-charcoal-400 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-warmblack text-white text-sm tracking-extra-wide uppercase font-medium transition-all hover:bg-charcoal-900 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="animate-slide-up">
            <div className="bg-white/20 rounded-lg px-8 py-4 inline-block">
              <p className="text-white font-medium">
                Welcome to the Velmora family! Check your inbox for your 10% off code.
              </p>
            </div>
          </div>
        )}

        <p className="text-xs text-white/60 mt-6">
          By subscribing, you agree to receive marketing emails from Velmora. 
          Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}

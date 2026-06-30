import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

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
    <section className="bg-cream py-16 lg:py-20">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
            <Mail className="w-6 h-6 text-gold" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
            Join the Velmora Family
          </h2>
          
          <p className="text-warmGray mb-8 max-w-md mx-auto">
            Subscribe to receive 10% off your first order, exclusive early access to new collections, 
            and styling inspiration straight to your inbox.
          </p>

          {isSubmitted ? (
            <div className="bg-white rounded-lg p-6 shadow-soft animate-fade-up">
              <p className="text-gold font-medium">Welcome to the Velmora Family!</p>
              <p className="text-warmGray text-sm mt-2">
                Check your inbox for your 10% discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 bg-white border border-lightGray rounded-sm text-charcoal 
                  placeholder:text-warmGray/60 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <p className="text-xs text-warmGray mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

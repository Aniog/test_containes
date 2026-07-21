import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

const Newsletter = () => {
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
    <section className="py-20 md:py-28 bg-gold">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          {/* Icon */}
          <div className="w-12 h-12 bg-charcoal/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail size={20} strokeWidth={1.5} className="text-charcoal" />
          </div>

          {/* Content */}
          <h2 className="font-serif text-charcoal text-section-mobile md:text-section mb-4">
            Join the Velmora Circle
          </h2>
          <p className="text-charcoal/70 mb-8">
            Subscribe to receive 10% off your first order, plus exclusive access to new collections and private sales.
          </p>

          {/* Form */}
          {isSubmitted ? (
            <div className="flex items-center justify-center gap-2 text-charcoal">
              <Check size={20} strokeWidth={1.5} />
              <span className="font-medium">Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-charcoal/10 border border-charcoal/20 px-4 py-3 text-charcoal placeholder:text-charcoal/50 focus:outline-none focus:border-charcoal"
                required
              />
              <button 
                type="submit"
                className="bg-charcoal text-ivory px-8 py-3 uppercase tracking-widest text-sm font-medium hover:bg-charcoal/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-xs text-charcoal/60 mt-4">
            By subscribing, you agree to receive marketing communications. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
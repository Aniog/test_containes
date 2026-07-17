import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-24 bg-velvet">
      <div className="container-main">
        <div className="max-w-2xl mx-auto text-center">
          {/* Content */}
          <p className="text-champagne text-sm tracking-[0.3em] uppercase mb-4">
            Stay Connected
          </p>
          <h2 className="font-serif text-ivory text-section mb-4">
            Join the Velmora World
          </h2>
          <p className="text-ivory/70 mb-8 max-w-md mx-auto">
            Be the first to know about new collections, exclusive offers, 
            and styling inspiration. Plus, enjoy 10% off your first order.
          </p>

          {/* Form or Success Message */}
          {isSubmitted ? (
            <div className="flex items-center justify-center gap-3 text-ivory animate-fade-in">
              <div className="w-12 h-12 rounded-full bg-champagne/20 flex items-center justify-center">
                <Check className="w-6 h-6 text-champagne" />
              </div>
              <div className="text-left">
                <p className="font-medium">Welcome to Velmora!</p>
                <p className="text-ivory/70 text-sm">Check your inbox for your 10% off code.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-4 bg-transparent border border-ivory/30 text-ivory placeholder-ivory/50 rounded-sm focus:outline-none focus:border-champagne transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-4 bg-champagne text-velvet font-medium text-sm tracking-widest uppercase rounded-sm hover:bg-gold-light transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <span className="w-5 h-5 border-2 border-velvet/30 border-t-velvet rounded-full animate-spin" />
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Trust note */}
          <p className="text-ivory/40 text-xs mt-6">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

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
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');
  };

  return (
    <section className="py-20 lg:py-28 bg-gold">
      <div className="max-w-2xl mx-auto px-6 lg:px-12 text-center">
        {isSubmitted ? (
          <div className="animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <Check size={32} strokeWidth={1.5} className="text-white" />
            </div>
            <h3 className="font-serif text-3xl lg:text-4xl text-white mb-4">
              Welcome to Velmora
            </h3>
            <p className="font-sans text-white/80">
              Check your inbox for your 10% discount code.
            </p>
          </div>
        ) : (
          <>
            {/* Content */}
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/70 mb-4">
              Stay Connected
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-white mb-4">
              Join for 10% Off
            </h2>
            <p className="font-sans text-white/80 mb-10 max-w-md mx-auto">
              Be the first to know about new arrivals, exclusive offers, and jewelry inspiration.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-6 py-4 bg-white/10 border border-white/30 text-white placeholder-white/50 font-sans text-sm rounded-sm focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-4 bg-white text-gold font-sans text-sm uppercase tracking-wider rounded-sm hover:bg-charcoal hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isLoading ? (
                  <span className="w-5 h-5 border-2 border-gold/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Subscribe
                    <ArrowRight size={16} strokeWidth={2} />
                  </>
                )}
              </button>
            </form>

            {/* Privacy Note */}
            <p className="font-sans text-xs text-white/50 mt-6">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default Newsletter;

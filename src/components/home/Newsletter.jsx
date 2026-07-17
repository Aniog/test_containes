import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Simulate submission
    setError('');
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-16 md:py-24 bg-gold">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          {isSubmitted ? (
            <div className="animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-3">
                Welcome to Velmora
              </h3>
              <p className="text-white/80">
                Check your inbox for 10% off your first order.
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-3">
                Join for 10% off your first order
              </h3>
              <p className="text-white/80 text-sm mb-8 max-w-md mx-auto">
                Sign up for our newsletter and be the first to know about new collections, 
                exclusive offers, and styling inspiration.
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className={`w-full px-4 py-3 bg-white/10 border ${
                        error ? 'border-red-400' : 'border-white/30'
                      } text-white placeholder-white/50 text-sm focus:outline-none focus:border-white transition-colors`}
                    />
                    {error && (
                      <p className="text-left text-xs text-white/90 mt-1.5">
                        {error}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-charcoal text-white text-sm tracking-wide uppercase font-medium transition-all hover:bg-charcoal/90 flex items-center justify-center gap-2 group"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                  </button>
                </div>
              </form>

              <p className="text-xs text-white/60 mt-4">
                By signing up, you agree to our Privacy Policy. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}

import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    // Simulate API call
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="py-16 md:py-20 bg-gold">
      <div className="container-luxury">
        <div className="max-w-2xl mx-auto text-center">
          {status === 'success' ? (
            <div className="animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">
                Welcome to Velmora
              </h3>
              <p className="text-white/80">
                Check your inbox for your 10% off code. We can't wait to have you!
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">
                Join the Velmora Family
              </h3>
              <p className="text-white/80 mb-8">
                Subscribe for exclusive access, early releases, and 10% off your first order.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="Enter your email"
                    className={`w-full px-5 py-3 bg-white/10 border rounded-sm text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20 transition-colors ${
                      status === 'error' ? 'border-white' : 'border-transparent'
                    }`}
                  />
                  {status === 'error' && (
                    <p className="absolute -bottom-6 left-0 text-xs text-white">
                      Please enter a valid email
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-gold font-medium text-sm tracking-wide hover:bg-cream transition-colors flex items-center justify-center gap-2 rounded-sm"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <p className="text-xs text-white/60 mt-6">
                By subscribing, you agree to receive marketing emails from Velmora.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

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
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-velmora-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white">Join for 10% Off</h2>
          <p className="mt-4 text-white/80">
            Subscribe to our newsletter and receive 10% off your first order, plus exclusive access to new collections and special offers.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-velmora-muted" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 bg-white text-velmora-text placeholder-velmora-muted 
                           focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-velmora-dark text-white uppercase tracking-widest-lg text-sm
                         hover:bg-velmora-darkHover transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitted ? (
                  <>
                    <Check className="w-4 h-4" />
                    Subscribed!
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </div>
          </form>

          <p className="mt-4 text-white/60 text-xs">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
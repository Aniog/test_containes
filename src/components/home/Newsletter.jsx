import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

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
    <section className="section-spacing bg-[var(--color-accent)]">
      <div className="container-main">
        <div className="max-w-xl mx-auto text-center">
          <Mail className="w-8 h-8 mx-auto text-white mb-4" />
          <h2 className="heading-serif text-3xl md:text-4xl text-white">
            Join for 10% Off
          </h2>
          <p className="mt-4 text-white/80">
            Subscribe to our newsletter and receive 10% off your first order. 
            Plus, be the first to know about new collections and exclusive offers.
          </p>

          {isSubmitted ? (
            <div className="mt-8 flex items-center justify-center gap-2 text-white">
              <Check className="w-5 h-5" />
              <span>Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/30 placeholder-white/60 text-white outline-none focus:border-white transition-colors"
                  required
                />
                <button 
                  type="submit"
                  className="px-8 py-4 bg-white text-[var(--color-accent)] font-medium tracking-wide hover:bg-white/90 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          )}

          <p className="mt-4 text-xs text-white/60">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
}
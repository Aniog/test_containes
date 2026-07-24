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
    <section className="py-20 md:py-28 bg-[var(--color-charcoal)]">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-cream)]">
            Join the Velmora Circle
          </h2>
          <p className="mt-4 text-[var(--color-stone-light)]">
            Subscribe to receive 10% off your first order, plus exclusive access to new collections and private sales.
          </p>

          {isSubmitted ? (
            <div className="mt-8 p-6 bg-[var(--color-warm-gold)] bg-opacity-10 border border-[var(--color-warm-gold)] border-opacity-30 animate-fade-in">
              <div className="flex items-center justify-center gap-2 text-[var(--color-warm-gold)]">
                <Check size={20} />
                <span className="font-sans">Welcome to the circle! Check your email for your discount code.</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-stone)]"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-transparent border border-[var(--color-stone)] border-opacity-30 text-[var(--color-cream)] placeholder-[var(--color-stone)] focus:border-[var(--color-warm-gold)] focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary bg-[var(--color-warm-gold)] text-[var(--color-charcoal)] hover:bg-[var(--color-cream)]"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-xs text-[var(--color-stone)]">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
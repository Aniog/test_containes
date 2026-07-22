import { useState } from 'react';

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
    <section className="py-16 md:py-24 bg-velmora-charcoal">
      <div className="container-main">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-cream">
            Join for 10% Off Your First Order
          </h2>
          <p className="mt-4 text-velmora-warm-gray">
            Subscribe to receive exclusive offers, early access to new collections, and styling inspiration.
          </p>

          {isSubmitted ? (
            <div className="mt-6 p-4 bg-velmora-success/20 text-velmora-cream">
              Thank you for subscribing! Check your email for your discount code.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-transparent border border-velmora-warm-gray/30 text-velmora-cream placeholder-velmora-warm-gray/50 focus:outline-none focus:border-velmora-gold transition-colors"
                required
              />
              <button 
                type="submit" 
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-velmora-warm-gray/70">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
          </p>
        </div>
      </div>
    </section>
  );
}

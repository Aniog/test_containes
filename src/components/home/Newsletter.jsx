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
    <section className="py-16 md:py-24 bg-[var(--color-gold)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Join for 10% Off Your First Order
          </h2>
          <p className="mt-4 text-white/80">
            Subscribe to our newsletter for exclusive offers, new arrivals, and styling inspiration.
          </p>
          
          {isSubmitted ? (
            <div className="mt-6 p-4 bg-white/10 text-white">
              <p className="font-serif">Thank you for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white text-[var(--color-charcoal)] placeholder-[var(--color-taupe)] focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button 
                type="submit"
                className="px-8 py-3 bg-[var(--color-charcoal)] text-white text-sm tracking-widest uppercase hover:bg-[var(--color-charcoal)]/80 transition-colors"
              >
                Subscribe
              </button>
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
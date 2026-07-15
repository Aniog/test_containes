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
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-gold text-sm uppercase tracking-widest">Stay in Touch</span>
        <h2 className="font-serif text-4xl md:text-5xl text-offWhite mt-4 mb-6">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-lightGray mb-8 max-w-xl mx-auto">
          Subscribe to our newsletter and be the first to know about new collections, 
          exclusive offers, and styling inspiration.
        </p>

        {isSubmitted ? (
          <div className="bg-gold/20 text-gold py-4 px-6 inline-block">
            <p className="font-medium">Thank you for subscribing!</p>
            <p className="text-sm mt-1">Check your email for your 10% discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-transparent border border-lightGray/30 text-offWhite placeholder:text-lightGray/50 focus:outline-none focus:border-gold transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gold text-white text-sm uppercase tracking-widest hover:bg-gold/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-xs text-lightGray/50 mt-6">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
        </p>
      </div>
    </section>
  );
}
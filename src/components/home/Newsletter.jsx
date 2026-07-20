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
    <section className="py-20 md:py-28 bg-gold-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {isSubmitted ? (
          <div className="animate-fade-in">
            <p className="font-serif text-2xl text-charcoal-800 mb-4">
              Welcome to Velmora
            </p>
            <p className="text-charcoal-600">
              Check your inbox for your 10% discount code.
            </p>
          </div>
        ) : (
          <>
            <p className="font-sans text-xs tracking-ultra-wide text-gold-700 uppercase mb-3">
              Stay Connected
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal-800 mb-4">
              Join for 10% Off
            </h2>
            <p className="text-charcoal-600 mb-8 max-w-md mx-auto">
              Subscribe to receive exclusive offers, new arrivals, and styling inspiration.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-4 bg-cream-50 border border-charcoal-200 font-sans text-sm text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:border-charcoal-600 transition-colors"
              />
              <button 
                type="submit"
                className="px-8 py-4 bg-charcoal-800 text-cream-50 font-sans text-sm tracking-wide uppercase hover:bg-charcoal-900 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-charcoal-500 mt-4">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </section>
  );
}

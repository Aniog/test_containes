import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-champagne-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 mb-4">
            Join the Velmora Circle
          </h2>
          <p className="font-sans text-charcoal-600 mb-2">
            Be the first to know about new collections, exclusive offers, and styling inspiration.
          </p>
          <p className="font-sans text-sm text-champagne-700 font-semibold mb-8">
            Enjoy 10% off your first order when you subscribe.
          </p>

          {submitted ? (
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="font-serif text-xl text-charcoal-900 mb-2">Welcome to the Circle!</p>
              <p className="font-sans text-sm text-charcoal-600">
                Check your inbox for your 10% discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-4 bg-white border border-champagne-200 text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:border-charcoal-900 transition-colors rounded"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-charcoal-900 text-ivory-100 font-sans font-semibold text-xs tracking-ultra-wide uppercase hover:bg-charcoal-800 transition-colors rounded"
              >
                Get 10% Off
              </button>
            </form>
          )}

          <p className="font-sans text-xs text-charcoal-500 mt-6">
            By subscribing, you agree to receive marketing emails from Velmora. 
            Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

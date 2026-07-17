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
    <section className="py-16 sm:py-24 bg-gold">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {submitted ? (
          <div className="animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white mb-4">
              Welcome to Velmora
            </h3>
            <p className="text-white/80">
              Check your inbox for your 10% off code.
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
              Join the Velmora Community
            </h2>
            <p className="text-white/80 mb-8 max-w-md mx-auto">
              Subscribe for exclusive access to new collections, styling tips, and 10% off your first order.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-white text-charcoal text-sm rounded placeholder:text-warmGray focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-charcoal text-white text-xs tracking-widest uppercase hover:bg-espresso transition-colors rounded"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-white/60 mt-4">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </section>
  );
}

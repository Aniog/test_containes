import React from 'react';
import { useUI } from '../../context/UIContext';

export default function Newsletter() {
  const { newsletterEmail, setNewsletterEmail, newsletterStatus, newsletterMessage, subscribeNewsletter } = useUI();

  const handleSubmit = (e) => {
    e.preventDefault();
    subscribeNewsletter(newsletterEmail);
  };

  return (
    <section className="section-padding bg-gold">
      <div className="container-main">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          <h2 className="font-serif text-section text-white mb-4">
            Join the Velmora World
          </h2>
          <p className="font-sans text-white/80 mb-8 max-w-md mx-auto">
            Be the first to know about new collections, exclusive offers, and styling inspiration. Get 10% off your first order.
          </p>

          {/* Form */}
          {newsletterStatus === 'success' ? (
            <div className="bg-white/20 rounded-sm p-6">
              <svg
                className="w-12 h-12 mx-auto text-white mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="font-serif text-xl text-white">{newsletterMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-5 py-3.5 bg-white text-espresso placeholder:text-stone/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  disabled={newsletterStatus === 'submitting'}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={newsletterStatus === 'submitting'}
                className="px-8 py-3.5 bg-charcoal text-white font-sans font-medium tracking-wide transition-colors hover:bg-espresso disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {newsletterStatus === 'submitting' ? 'Joining...' : 'Join & Get 10% Off'}
              </button>
            </form>
          )}

          {/* Error message */}
          {newsletterStatus === 'error' && (
            <p className="mt-3 text-sm text-white/90">{newsletterMessage}</p>
          )}

          {/* Privacy note */}
          <p className="mt-4 text-xs text-white/60">
            By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

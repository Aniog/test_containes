import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-20 lg:py-28 bg-espresso-900">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
            Join the Velmora World
          </h2>
          <p className="text-white/70 mb-8">
            Subscribe for 10% off your first order, early access to new collections, and styling inspiration.
          </p>

          {/* Form */}
          {status === 'success' ? (
            <div className="bg-gold/20 rounded-lg p-6">
              <p className="text-gold font-medium">
                Welcome to Velmora! Check your inbox for your 10% off code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your email"
                  className={`w-full px-5 py-4 bg-white/10 border ${
                    status === 'error' ? 'border-red-400' : 'border-white/20'
                  } rounded text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors`}
                  disabled={status === 'loading'}
                />
                {status === 'error' && (
                  <p className="text-red-400 text-sm mt-2 text-left">
                    {errorMessage}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-4 bg-gold text-white text-sm uppercase tracking-wider rounded hover:bg-gold-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}

          {/* Privacy note */}
          <p className="text-xs text-white/40 mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

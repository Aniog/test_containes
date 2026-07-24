import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setError('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="py-20 lg:py-28 bg-gold-50/30">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Content */}
        <div className="mb-8">
          <span className="section-subtitle block mb-3">STAY CONNECTED</span>
          <h2 className="section-title text-3xl md:text-4xl mb-4">
            Join the Velmora World
          </h2>
          <p className="text-charcoal-600 font-sans">
            Subscribe for 10% off your first order, exclusive early access to new collections, 
            and styling inspiration delivered to your inbox.
          </p>
        </div>

        {/* Form */}
        {status === 'success' ? (
          <div className="flex items-center justify-center gap-3 py-4 text-charcoal-900">
            <Check className="w-5 h-5 text-gold-500" />
            <span className="font-sans">Welcome to Velmora! Check your inbox for your 10% off code.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                placeholder="Enter your email"
                className="input-field"
                disabled={status === 'loading'}
              />
              {error && (
                <p className="text-red-600 text-xs text-left mt-2">{error}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary whitespace-nowrap"
            >
              {status === 'loading' ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Subscribing...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </button>
          </form>
        )}

        {/* Privacy Note */}
        <p className="text-xs text-charcoal-500 mt-4">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;

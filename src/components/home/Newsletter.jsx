import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setStatus('success');
    setMessage('Welcome to Velmora! Check your inbox for 10% off.');
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-cream-100 to-cream-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="mb-6">
          <svg
            className="w-12 h-12 mx-auto text-gold-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
            />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-800 mb-3">
          Join the Velmora Circle
        </h2>
        <p className="font-sans text-sm text-charcoal-600 mb-8">
          Subscribe for 10% off your first order, plus exclusive access to new arrivals and special offers.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 bg-cream-50 border border-charcoal-200 font-sans text-sm focus:border-gold-400 transition-colors"
            disabled={status === 'loading' || status === 'success'}
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className={`px-8 py-3 font-sans text-sm font-medium tracking-widest uppercase transition-all duration-300 ${
              status === 'success'
                ? 'bg-green-600 text-cream-50 cursor-default'
                : 'bg-charcoal-800 text-cream-50 hover:bg-charcoal-700'
            }`}
          >
            {status === 'loading' ? 'Joining...' : status === 'success' ? 'Welcome!' : 'Subscribe'}
          </button>
        </form>

        {/* Message */}
        {message && (
          <p className={`mt-4 text-sm ${status === 'error' ? 'text-red-500' : 'text-green-600'}`}>
            {message}
          </p>
        )}

        {/* Privacy Note */}
        <p className="mt-4 text-xs text-charcoal-400">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

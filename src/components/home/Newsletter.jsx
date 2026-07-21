import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
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
    <section className="py-20 bg-champagne">
      <div className="container-main">
        <div className="max-w-2xl mx-auto text-center">
          {status === 'success' ? (
            <div className="animate-fade-up">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-espresso flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-champagne"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-espresso mb-3">
                Welcome to Velmora
              </h3>
              <p className="text-espresso/70">
                Check your inbox for your 10% off code.
              </p>
            </div>
          ) : (
            <>
              <p className="text-espresso/70 text-sm tracking-[0.2em] uppercase mb-3">
                Stay Connected
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-4">
                Join for 10% Off
              </h2>
              <p className="text-espresso/70 mb-8 max-w-md mx-auto">
                Subscribe to receive exclusive offers, early access to new collections,
                and styling inspiration delivered to your inbox.
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      error={error}
                      className="bg-ivory border-ivory focus:border-espresso"
                      aria-label="Email address"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-espresso text-ivory hover:bg-espresso/90 whitespace-nowrap"
                  >
                    {status === 'loading' ? 'Joining...' : 'Subscribe'}
                  </Button>
                </div>
              </form>

              <p className="text-xs text-espresso/50 mt-4">
                By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

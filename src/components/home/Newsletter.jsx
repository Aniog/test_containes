import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    setStatus('submitting');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setStatus('success');
    setEmail('');
  };

  return (
    <section className="bg-velmora-charcoal py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-xl mx-auto text-center">
          {status === 'success' ? (
            <div className="animate-fade-up">
              <div className="w-16 h-16 bg-velmora-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-velmora-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3
                className="text-2xl text-white mb-3"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                Welcome to Velmora
              </h3>
              <p className="text-velmora-warm-gray">
                Check your inbox for your 10% off code. We can't wait to have you!
              </p>
            </div>
          ) : (
            <>
              <h2
                className="text-2xl md:text-3xl text-white mb-4"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                Join for 10% off your first order
              </h2>
              <p className="text-velmora-warm-gray mb-8">
                Be the first to know about new collections, exclusive offers, and styling inspiration.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-velmora-gold"
                    error={error}
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  isLoading={status === 'submitting'}
                  className="whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </form>

              {error && (
                <p className="text-red-400 text-sm mt-2 text-left sm:text-center">
                  {error}
                </p>
              )}

              <p className="text-xs text-velmora-warm-gray/70 mt-4">
                By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  if (status === 'success') {
    return (
      <section className="bg-gold py-16 md:py-20">
        <div className="container-wide">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-charcoal/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2
              className="text-3xl md:text-4xl text-charcoal mb-3"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 400,
                letterSpacing: '0.02em',
              }}
            >
              Welcome to the Circle
            </h2>
            <p className="text-charcoal/70">
              Check your inbox for your 10% off code. We can't wait to share our story with you.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gold py-16 md:py-20">
      <div className="container-wide">
        <div className="max-w-xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl text-charcoal mb-3"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 400,
              letterSpacing: '0.02em',
            }}
          >
            Join the Velmora Circle
          </h2>
          <p className="text-charcoal/70 mb-8">
            Subscribe for 10% off your first order and early access to new collections.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrorMessage('');
                }}
                error={errorMessage}
                className="bg-cream border-0"
              />
            </div>
            <Button
              type="submit"
              variant="secondary"
              loading={status === 'loading'}
              className="bg-charcoal border-charcoal text-white hover:bg-charcoal/90 sm:w-auto whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>

          <p className="text-xs text-charcoal/50 mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

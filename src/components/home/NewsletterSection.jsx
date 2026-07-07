import { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-20 md:py-28 bg-gold">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-4">
          Join the Velmora Circle
        </h2>
        <p className="font-sans text-ivory/80 mb-8 max-w-md mx-auto">
          Be the first to know about new collections, exclusive offers, and styling inspiration. 
          Plus, enjoy 10% off your first order.
        </p>

        {/* Form */}
        {status === 'success' ? (
          <div className="animate-fade-in">
            <div className="bg-ivory/10 backdrop-blur-sm border border-ivory/20 rounded-sm p-6">
              <p className="font-serif text-xl text-ivory italic">
                "Welcome to the circle, darling."
              </p>
              <p className="text-ivory/70 text-sm mt-2">
                Check your inbox for your 10% off code.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 bg-ivory/10 border border-ivory/30 text-ivory placeholder:text-ivory/50 font-sans text-sm focus:outline-none focus:border-ivory transition-colors"
              />
            </div>
            <Button
              type="submit"
              variant="secondary"
              size="md"
              loading={status === 'submitting'}
              className="bg-ivory text-charcoal border-ivory hover:bg-ivory/90 whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>
        )}

        {/* Privacy note */}
        <p className="text-ivory/50 text-xs mt-4">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;

import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="section-spacing bg-gold">
      <div className="container-main">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Join the Velmora World
          </h2>
          <p className="font-sans text-white/90 font-light mb-8">
            Be the first to know about new collections, exclusive offers, and styling tips.
            Get 10% off your first order when you sign up.
          </p>

          {status === 'success' ? (
            <div className="bg-white/10 backdrop-blur-sm py-6 px-8">
              <p className="font-serif text-xl text-white mb-2">Welcome to Velmora!</p>
              <p className="text-white/80 text-sm">
                Check your inbox for your 10% discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 bg-white text-charcoal placeholder:text-medium-gray focus:outline-none focus:ring-2 focus:ring-charcoal/20"
              />
              <Button
                type="submit"
                variant="secondary"
                className="bg-white text-gold hover:bg-charcoal hover:text-white border-white"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Joining...' : 'Join'}
              </Button>
            </form>
          )}

          <p className="text-white/60 text-xs mt-6">
            By subscribing, you agree to receive marketing emails from Velmora.
            Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';

const Newsletter = () => {
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
    <section className="py-16 lg:py-24 bg-champagne">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl lg:text-4xl text-white mb-4">
            Join the Velmora Circle
          </h2>
          <p className="text-white/80 mb-8">
            Subscribe and receive 10% off your first order, plus early access to
            new collections and exclusive offers.
          </p>

          {status === 'success' ? (
            <div className="bg-white/10 py-4 px-6 text-white">
              Thank you for subscribing! Check your email for your discount code.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 bg-white text-charcoal placeholder:text-stone focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="h-12 px-8 bg-warm-black text-white font-medium text-sm uppercase tracking-wider hover:bg-charcoal transition-colors disabled:opacity-70"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}

          <p className="text-xs text-white/60 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from Velmora.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

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
    <section className="py-20 bg-velmora-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-cream mb-4">
            Join the Velmora Circle
          </h2>
          <p className="text-velmora-taupe mb-8">
            Subscribe and receive 10% off your first order, plus early access to new collections and exclusive offers.
          </p>

          {status === 'success' ? (
            <div className="bg-velmora-gold/20 text-velmora-gold py-4 px-6">
              <p className="text-sm uppercase tracking-widest">Welcome to Velmora!</p>
              <p className="text-velmora-taupe text-sm mt-2">Check your email for your 10% discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-transparent border border-velmora-taupe text-velmora-cream placeholder-velmora-taupe focus:outline-none focus:border-velmora-gold transition-colors"
                required
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-8 py-4 bg-velmora-gold text-white text-sm uppercase tracking-widest hover:bg-velmora-gold-dark transition-colors duration-300 disabled:opacity-50"
              >
                {status === 'submitting' ? 'Joining...' : 'Subscribe'}
              </button>
            </form>
          )}
          
          <p className="text-velmora-taupe text-xs mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
}
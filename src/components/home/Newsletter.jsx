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
    <section className="py-20 md:py-28 bg-velmora-charcoal">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-velmora-gold text-xs uppercase tracking-widest">Newsletter</span>
        <h2 className="font-serif text-3xl md:text-4xl mt-3 text-velmora-cream">
          Join for 10% Off Your First Order
        </h2>
        <p className="text-velmora-taupe mt-4 mb-8">
          Subscribe to receive exclusive offers, early access to new collections, and styling inspiration.
        </p>

        {status === 'success' ? (
          <div className="bg-velmora-gold/20 text-velmora-gold py-4 px-6">
            Thank you for subscribing! Check your email for your discount code.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-transparent border border-velmora-taupe/50 text-velmora-cream placeholder-velmora-taupe focus:border-velmora-gold focus:outline-none transition-colors"
              required
            />
            <button 
              type="submit"
              disabled={status === 'submitting'}
              className="px-8 py-4 bg-velmora-gold text-velmora-charcoal uppercase tracking-widest text-sm hover:bg-velmora-goldLight transition-colors disabled:opacity-50"
            >
              {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}

        <p className="text-xs text-velmora-taupe mt-4">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
        </p>
      </div>
    </section>
  );
}
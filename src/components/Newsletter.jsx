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
    <section className="py-section-mobile md:py-section bg-velmora-accent">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-bg-primary mb-3">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-velmora-bg-primary/80 mb-6">
            Subscribe to receive exclusive offers and be the first to know about new collections.
          </p>
          
          {status === 'success' ? (
            <div className="bg-velmora-bg-primary/10 p-4 text-velmora-bg-primary">
              Thank you for subscribing! Check your email for your discount code.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-velmora-bg-primary text-velmora-text-primary placeholder:text-velmora-text-secondary/60 outline-none border border-velmora-bg-primary/20 focus:border-velmora-bg-primary/50"
                required
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-8 py-3 bg-velmora-bg-primary text-velmora-accent font-medium tracking-wider uppercase text-sm hover:bg-velmora-bg-secondary transition-colors duration-300 disabled:opacity-70"
              >
                {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
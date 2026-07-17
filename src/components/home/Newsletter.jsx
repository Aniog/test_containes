import { useState } from 'react';

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
    <section className="section py-16" style={{ backgroundColor: 'var(--color-charcoal)' }}>
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#C9A962]">
            Stay in the Loop
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mt-4 mb-4 text-[#FDFCFA]">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-[#8A8A8A] mb-8">
            Subscribe to receive exclusive offers, early access to new collections, and styling inspiration.
          </p>

          {status === 'success' ? (
            <div className="p-4 bg-[#C9A962]/20 border border-[#C9A962] text-[#C9A962]">
              Thank you for subscribing! Check your email for your discount code.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-transparent border border-[#8A8A8A] text-[#FDFCFA] placeholder-[#8A8A8A] focus:border-[#C9A962] focus:outline-none transition-colors"
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-accent whitespace-nowrap"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}

          <p className="text-xs text-[#666] mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
          </p>
        </div>
      </div>
    </section>
  );
}
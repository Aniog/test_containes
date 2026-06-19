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
    <section className="section bg-[#C9A962]">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] tracking-wide mb-3">
            Join for 10% Off
          </h2>
          <p className="text-[#1A1A1A]/70 mb-8">
            Subscribe to our newsletter and receive 10% off your first order.
            Be the first to know about new collections and exclusive offers.
          </p>

          {status === 'success' ? (
            <div className="bg-[#FDFCFA] text-[#1A1A1A] py-4 px-6">
              <p className="font-medium">Thank you for subscribing!</p>
              <p className="text-sm text-[#6B6B6B]">Check your email for your 10% discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-[#FDFCFA] text-[#1A1A1A] placeholder-[#6B6B6B] border border-[#1A1A1A]/20 focus:outline-none focus:border-[#1A1A1A]"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-3 bg-[#1A1A1A] text-white text-sm font-medium tracking-wider uppercase hover:bg-[#0D0D0D] transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}

          <p className="text-xs text-[#1A1A1A]/60 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
}
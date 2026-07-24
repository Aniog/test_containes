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
    <section className="py-16 md:py-24 bg-[#1A1815]">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl text-[#FAF9F7] mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Join the Velmora Circle
          </h2>
          <p className="text-[#9A9590] mb-8">
            Subscribe to receive 10% off your first order and be the first to know
            about new collections and exclusive offers.
          </p>

          {status === 'success' ? (
            <div className="p-4 bg-[#C9A962]/10 border border-[#C9A962]/30 text-[#C9A962]">
              Thank you for subscribing! Check your email for your discount code.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-transparent border border-[#3A3530] text-[#FAF9F7] placeholder-[#6B6560] focus:border-[#C9A962] focus:outline-none transition-colors duration-300"
                required
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-8 py-3 bg-[#C9A962] text-white text-sm tracking-[0.1em] uppercase hover:bg-[#B8954F] transition-colors duration-300 disabled:opacity-50"
              >
                {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}

          <p className="text-xs text-[#6B6560] mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive
            updates from Velmora.
          </p>
        </div>
      </div>
    </section>
  );
}
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
    <section className="py-16 md:py-24 bg-[#E8DCC4]">
      <div className="container-app">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1918]">
            Join for 10% Off
          </h2>
          <p className="mt-4 text-[#6B6560]">
            Subscribe to our newsletter and receive 10% off your first order. 
            Be the first to know about new collections and exclusive offers.
          </p>

          {status === 'success' ? (
            <div className="mt-6 p-4 bg-[#1A1918] text-[#FAF9F7]">
              <p className="font-medium">Thank you for subscribing!</p>
              <p className="text-sm mt-1 text-[#FAF9F7]/70">Check your email for your 10% discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3.5 bg-[#FAF9F7] border border-[#E5E2DE] text-[#1A1918] placeholder-[#6B6560] focus:outline-none focus:border-[#C9A962] transition-colors"
                  required
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary whitespace-nowrap disabled:opacity-70"
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              <p className="mt-3 text-xs text-[#6B6560]">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
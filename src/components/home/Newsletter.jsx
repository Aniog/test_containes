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
    <section className="py-20 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#FAF7F2]">
            Join the Velmora Circle
          </h2>
          <p className="mt-4 text-[#A8A29E]">
            Subscribe for 10% off your first order and be the first to know about new collections and exclusive offers.
          </p>

          {status === 'success' ? (
            <div className="mt-6 p-4 bg-[#C9A962]/20 border border-[#C9A962]/30">
              <p className="text-[#C9A962]">Thank you for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-transparent border border-[#3D3D3D] text-[#FAF7F2] placeholder-[#6B6B6B] focus:outline-none focus:border-[#C9A962] transition-colors"
                  required
                />
                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="px-8 py-3 bg-[#C9A962] text-[#1A1A1A] font-medium text-sm tracking-wider uppercase hover:bg-[#D4BC7D] transition-colors disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              <p className="mt-3 text-xs text-[#6B6B6B]">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
import { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export default function Newsletter() {
  const [ref, isVisible] = useIntersectionObserver();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      return;
    }

    // Simulate subscription
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="py-20 md:py-28 bg-velmora-charcoal">
      <div ref={ref} className="section-container">
        <div className={`max-w-2xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Gold accent line */}
          <div className="w-12 h-px bg-velmora-gold mx-auto mb-8" />
          
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Join the Velmora Circle
          </h2>
          <p className="text-white/60 mb-10 max-w-md mx-auto">
            Subscribe for exclusive access to new collections, special offers, and styling inspiration. Plus, enjoy 10% off your first order.
          </p>

          {/* Form */}
          {status === 'success' ? (
            <div className="bg-white/10 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-velmora-gold font-medium mb-2">Welcome to the circle!</p>
              <p className="text-white/70 text-sm">
                Check your inbox for your 10% discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your email"
                  className={`w-full px-5 py-3 bg-white/10 border rounded-sm text-white placeholder:text-white/40 focus:outline-none focus:border-velmora-gold transition-colors ${
                    status === 'error' ? 'border-red-400' : 'border-white/20'
                  }`}
                />
                {status === 'error' && (
                  <p className="mt-2 text-left text-red-400 text-sm">
                    Please enter a valid email address
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Get 10% Off
              </button>
            </form>
          )}

          <p className="mt-6 text-xs text-white/40">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

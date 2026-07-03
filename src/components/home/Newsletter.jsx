import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setStatus('success');
    setEmail('');
    
    // Reset after 5 seconds
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section className="py-20 md:py-24" style={{ backgroundColor: 'var(--color-gold)' }}>
      <div className="container">
        <div className="max-w-2xl mx-auto text-center text-white">
          {/* Icon */}
          <div className="mb-6">
            <svg 
              className="w-12 h-12 mx-auto opacity-90" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1} 
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
              />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
            Join the Velmora Circle
          </h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            Be the first to know about new collections, exclusive offers, and styling inspiration. 
            Plus, enjoy 10% off your first order.
          </p>

          {/* Form */}
          {status === 'success' ? (
            <div className="flex items-center justify-center gap-3 text-white">
              <Check className="w-5 h-5" />
              <span className="text-lg font-medium">Welcome to the circle!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-4 bg-white/10 border border-white/30 text-white placeholder-white/50 rounded-sm focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-4 bg-white text-[#C9A962] font-medium text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#2D2926] hover:text-white transition-colors disabled:opacity-70"
              >
                {status === 'loading' ? (
                  'Joining...'
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Privacy Note */}
          <p className="text-white/50 text-xs mt-4">
            By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

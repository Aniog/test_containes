import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setMessage('Welcome to Velmora! Check your inbox for 10% off.');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="bg-[#1C1917] py-16 md:py-20">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
            Join the Velmora World
          </h2>
          <p className="text-white/70 mb-8">
            Subscribe for 10% off your first order, plus exclusive access to new arrivals and styling inspiration.
          </p>

          {status === 'success' ? (
            <div className="flex items-center justify-center gap-3 text-[#C4A962]">
              <Check className="w-5 h-5" />
              <span>{message}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/50 focus:border-[#C4A962] transition-colors"
                  disabled={status === 'loading'}
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-3 bg-[#C4A962] text-white text-sm font-medium tracking-[0.1em] uppercase rounded flex items-center justify-center gap-2 hover:bg-[#D4BC7D] transition-colors disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
              {status === 'error' && (
                <p className="absolute -bottom-6 left-0 text-sm text-red-400">
                  {message}
                </p>
              )}
            </form>
          )}

          <p className="text-xs text-white/50 mt-6">
            By subscribing, you agree to receive marketing emails from Velmora. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import Button from '../ui/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="bg-warm-900 py-16 md:py-20">
      <div className="section-container">
        <div className="max-w-xl mx-auto text-center">
          {/* Icon */}
          <div className="w-12 h-12 rounded-full bg-gold-400/20 flex items-center justify-center mx-auto mb-6">
            <Mail size={20} strokeWidth={1.5} className="text-gold-400" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-3">
            Join the Velmora Circle
          </h2>
          <p className="text-warm-300 text-sm mb-8">
            Subscribe for 10% off your first order, exclusive access to new 
            collections, and curated styling inspiration.
          </p>

          {/* Form */}
          {status === 'success' ? (
            <div className="flex items-center justify-center gap-2 text-gold-400 py-4">
              <Check size={20} strokeWidth={2} />
              <span className="text-sm">Welcome to the circle! Check your inbox.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 bg-warm-800/50 border ${
                    status === 'error'
                      ? 'border-dusty'
                      : 'border-warm-700 focus:border-gold-400'
                  } text-white placeholder:text-warm-500 focus:outline-none transition-colors`}
                  disabled={status === 'loading'}
                />
                {status === 'error' && (
                  <p className="absolute -bottom-6 left-0 text-dusty text-xs">
                    {errorMessage}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                variant="primary"
                size="md"
                loading={status === 'loading'}
                className="sm:w-auto whitespace-nowrap"
              >
                Get 10% Off
              </Button>
            </form>
          )}

          {/* Privacy note */}
          <p className="text-warm-500 text-xs mt-6">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

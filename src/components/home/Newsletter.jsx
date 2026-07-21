import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setErrorMessage('Please enter your email address');
      setStatus('error');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('Please enter a valid email address');
      setStatus('error');
      return;
    }
    
    setStatus('submitting');
    setErrorMessage('');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };
  
  return (
    <section className="py-16 md:py-20 bg-gold-500">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {status === 'success' ? (
          <div className="animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
              Welcome to Velmora
            </h3>
            <p className="text-white/90">
              Check your inbox for your 10% discount code.
            </p>
          </div>
        ) : (
          <>
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
              Join the Velmora Circle
            </h3>
            <p className="text-white/90 mb-8">
              Subscribe for 10% off your first order, exclusive access to new collections, and styling inspiration.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:bg-white/20 transition-colors"
                  aria-label="Email address"
                />
                {status === 'error' && (
                  <p className="mt-2 text-sm text-cream-100 text-left">{errorMessage}</p>
                )}
              </div>
              
              <Button
                type="submit"
                variant="primary"
                className="bg-white text-gold-600 hover:bg-cream-100 whitespace-nowrap"
                loading={status === 'submitting'}
              >
                {status === 'submitting' ? 'Subscribing...' : 'Get 10% Off'}
              </Button>
            </form>
            
            <p className="mt-4 text-xs text-white/70">
              By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </section>
  );
}

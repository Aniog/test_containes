import { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');
  
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your email address');
      return;
    }
    
    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }
    
    setStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setStatus('success');
    setEmail('');
  };
  
  return (
    <section className="py-20 md:py-30 bg-primary text-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">
          Join the Velmora World
        </h2>
        <p className="text-white/80 mb-8 max-w-md mx-auto">
          Be the first to know about new collections, exclusive offers, and styling inspiration. Get 10% off your first order.
        </p>
        
        {status === 'success' ? (
          <div className="flex items-center justify-center gap-2 text-accent">
            <Check className="w-5 h-5" />
            <span className="font-medium">Welcome to Velmora! Check your inbox for 10% off.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-accent transition-colors"
                  disabled={status === 'loading'}
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                isLoading={status === 'loading'}
                className="bg-accent hover:bg-accent-hover whitespace-nowrap"
              >
                Get 10% Off
              </Button>
            </div>
            
            {status === 'error' && (
              <div className="flex items-center justify-center gap-2 mt-3 text-error">
                <AlertCircle className="w-4 h-4" />
                <span className="text-sm">{errorMessage}</span>
              </div>
            )}
            
            <p className="text-xs text-white/50 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

export default NewsletterSection;

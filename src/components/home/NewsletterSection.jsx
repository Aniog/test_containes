import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }

    // Simulate subscription
    setStatus('success');
    setEmail('');
    
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="py-20 lg:py-28 bg-warm-black">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Icon */}
          <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-gold" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
            Join the Velmora Circle
          </h2>
          
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            Subscribe for 10% off your first order, early access to new collections, 
            and exclusive styling inspiration.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Enter your email"
                className={`w-full px-5 py-4 bg-white/10 border rounded text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors ${
                  status === 'error' ? 'border-red-400' : 'border-white/20'
                }`}
              />
              {status === 'error' && (
                <p className="absolute -bottom-6 left-0 text-red-400 text-sm">
                  Please enter a valid email
                </p>
              )}
            </div>
            
            <button
              type="submit"
              className="px-8 py-4 bg-gold text-warm-black font-medium rounded hover:bg-gold-dark transition-colors disabled:opacity-50 whitespace-nowrap"
              disabled={status === 'success'}
            >
              {status === 'success' ? (
                <span className="flex items-center justify-center gap-2">
                  <Check className="w-5 h-5" />
                  Subscribed!
                </span>
              ) : (
                'Get 10% Off'
              )}
            </button>
          </form>

          {/* Privacy Note */}
          <p className="text-white/40 text-xs mt-6">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

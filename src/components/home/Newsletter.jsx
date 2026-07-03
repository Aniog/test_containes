import { useState } from 'react';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="py-20 md:py-28 bg-gold">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-6">
            <Mail className="w-6 h-6 text-white" />
          </div>
          
          <h2 className="text-white mb-3">
            Join the Velmora World
          </h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            Subscribe for 10% off your first order, plus early access to new collections and exclusive content.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 bg-white text-charcoal rounded-sm placeholder:text-stone focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-charcoal text-white text-sm uppercase tracking-wide font-medium rounded-sm hover:bg-slate transition-colors whitespace-nowrap"
            >
              Get 10% Off
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-white text-sm">
              Thank you! Check your inbox for your discount code.
            </p>
          )}
          
          {status === 'error' && (
            <p className="mt-4 text-white/90 text-sm">
              Please enter a valid email address.
            </p>
          )}

          <p className="mt-6 text-white/60 text-xs">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

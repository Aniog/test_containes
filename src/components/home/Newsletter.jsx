import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('submitting');
    // Simulate submission
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className="bg-charcoal-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-400/20 mb-6">
            <Mail size={24} className="text-gold-400" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-cream-50 mb-4">
            Join for 10% Off Your First Order
          </h2>
          <p className="font-sans text-cream-300 mb-8 leading-relaxed">
            Subscribe to our newsletter for exclusive offers, styling tips, and early access to new collections.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 bg-charcoal-600 border border-charcoal-500 rounded-none 
                         text-cream-50 placeholder:text-charcoal-300 font-sans text-sm
                         focus:outline-none focus:border-gold-400 transition-colors"
              required
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="bg-gold-400 text-charcoal-800 px-8 py-3.5 font-sans text-sm font-medium 
                         tracking-wider uppercase hover:bg-gold-500 transition-colors
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {status === 'success' && (
            <p className="font-sans text-sm text-gold-400 mt-4 animate-fade-in">
              Thank you! Check your email for your 10% discount code.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

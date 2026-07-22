import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate API call
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="bg-accent/10 section-padding">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Mail className="w-8 h-8 text-accent" />
        </div>

        {/* Heading */}
        <h2 className="heading-serif text-3xl md:text-4xl mb-4">
          Join the Velmora Circle
        </h2>
        <p className="font-sans text-charcoal-600 mb-8 max-w-md mx-auto">
          Be the first to know about new collections, exclusive offers, and 
          styling inspiration. Plus, enjoy 10% off your first order.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-5 py-4 bg-ivory-100 border border-charcoal-200 rounded-lg
                       font-sans text-charcoal-800 placeholder:text-charcoal-400
                       focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent
                       transition-all"
            required
          />
          <button
            type="submit"
            className="btn-accent whitespace-nowrap"
          >
            Get 10% Off
          </button>
        </form>

        {/* Success Message */}
        {status === 'success' && (
          <p className="mt-4 font-sans text-sm text-green-700 animate-fade-in">
            Welcome to the Velmora Circle! Check your inbox for your discount code.
          </p>
        )}

        {/* Privacy Note */}
        <p className="mt-6 font-sans text-xs text-charcoal-500">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

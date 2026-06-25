import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setStatus('success');
    setMessage('Welcome to Velmora! Check your inbox for 10% off.');
    setEmail('');
  };

  return (
    <section className="py-20 md:py-28 bg-[var(--color-gold)]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-ivory)] mb-4">
          Join for 10% Off
        </h2>
        <p className="text-[var(--color-ivory)]/80 mb-8">
          Be the first to know about new collections, exclusive offers, and styling inspiration.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 bg-[var(--color-ivory)] text-[var(--color-charcoal)] placeholder:text-[var(--color-stone)] focus:outline-none focus:ring-2 focus:ring-[var(--color-ivory)]"
            disabled={status === 'loading' || status === 'success'}
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="px-8 py-3 bg-[var(--color-charcoal)] text-[var(--color-ivory)] text-sm tracking-widest uppercase hover:bg-[var(--color-bark)] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Joining...' : 'Subscribe'}
          </button>
        </form>
        
        {message && (
          <p className={`mt-4 text-sm ${status === 'error' ? 'text-[var(--color-ivory)]' : 'text-[var(--color-ivory)]/90'}`}>
            {message}
          </p>
        )}
        
        <p className="mt-6 text-xs text-[var(--color-ivory)]/60">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

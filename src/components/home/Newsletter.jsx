import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setMessage('Welcome to Velmora! Check your inbox for 10% off your first order.');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-20 md:py-24 bg-gold">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Content */}
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
            Join the Velmora World
          </h2>
          <p className="text-charcoal/80 mb-8">
            Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
          </p>

          {/* Form */}
          {status === 'success' ? (
            <div className="bg-white/20 rounded-md p-6">
              <p className="text-charcoal font-medium">{message}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`w-full px-5 py-4 bg-white border rounded-sm text-charcoal placeholder:text-charcoal/50 focus:outline-none focus:ring-2 focus:ring-charcoal/20 transition-all ${
                    status === 'error' ? 'border-error' : 'border-transparent'
                  }`}
                  disabled={status === 'submitting'}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-8 py-4 bg-charcoal text-white font-sans text-overline font-medium uppercase tracking-widest rounded-sm hover:bg-charcoal-light transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {status === 'submitting' ? 'Joining...' : 'Get 10% Off'}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="text-charcoal text-sm mt-3">{message}</p>
          )}

          {/* Privacy Note */}
          <p className="text-charcoal/60 text-caption mt-6">
            By subscribing, you agree to receive marketing emails from Velmora. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

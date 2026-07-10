import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-20 md:py-28 bg-velmora-bg-dark">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-velmora-accent/20 flex items-center justify-center">
          <Mail className="w-6 h-6 text-velmora-accent" />
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          Join the Velmora World
        </h2>
        
        {/* Subtext */}
        <p className="text-velmora-text-muted mb-8 max-w-md mx-auto">
          Subscribe for 10% off your first order, early access to new collections, 
          and exclusive styling inspiration delivered to your inbox.
        </p>

        {/* Form */}
        {status === 'success' ? (
          <div className="bg-velmora-accent/20 border border-velmora-accent/30 rounded-sm p-6 max-w-md mx-auto">
            <p className="text-white font-medium mb-2">Welcome to Velmora!</p>
            <p className="text-velmora-text-muted text-sm">
              Check your inbox for your 10% off code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/50 outline-none focus:border-velmora-accent transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-4 bg-velmora-accent text-white text-xs tracking-widest uppercase font-medium hover:bg-velmora-accent-dark transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Subscribe <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        {/* Privacy note */}
        <p className="text-xs text-velmora-text-muted mt-4">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;

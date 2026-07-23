import { useState } from 'react';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // In production, this would send to an API
    }
  };

  return (
    <section className="py-24 bg-[var(--color-gold)]">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
            <Mail size={28} className="text-white" strokeWidth={1.5} />
          </div>

          {/* Heading */}
          <h2 
            className="text-white mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Join for 10% Off
          </h2>

          {/* Subtext */}
          <p 
            className="text-white/80 mb-8"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Subscribe to receive exclusive offers, new arrivals, and style inspiration.
          </p>

          {/* Form */}
          {isSubmitted ? (
            <div className="bg-white/10 rounded p-6">
              <p className="text-white font-medium" style={{ fontFamily: 'var(--font-sans)' }}>
                Welcome to the Velmora family!
              </p>
              <p className="text-white/70 text-sm mt-2">
                Check your inbox for your 10% discount code.
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
                className="flex-1 px-5 py-4 bg-white text-[var(--color-charcoal)] placeholder:text-[var(--color-text-secondary)] focus:outline-none"
                style={{ fontFamily: 'var(--font-sans)' }}
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[var(--color-charcoal)] text-white font-medium tracking-wider uppercase text-sm hover:bg-[#2d2d2d] transition-colors"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Subscribe
              </button>
            </form>
          )}

          {/* Privacy Note */}
          <p className="text-white/50 text-xs mt-4" style={{ fontFamily: 'var(--font-sans)' }}>
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

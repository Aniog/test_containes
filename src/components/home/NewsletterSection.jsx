// Velmora Fine Jewelry - Newsletter Section
import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setStatus('success');
    setEmail('');
  };

  return (
    <section className="py-20 md:py-24 bg-[#B8860B]">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail size={20} className="text-white" strokeWidth={1.5} />
          </div>

          {/* Heading */}
          <h2
            className="text-2xl md:text-3xl text-white font-normal mb-3"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Join for 10% Off Your First Order
          </h2>
          
          <p
            className="text-sm text-white/80 mb-8 max-w-md mx-auto"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Be the first to know about new collections, exclusive offers, and styling inspiration.
          </p>

          {/* Form */}
          {status === 'success' ? (
            <div className="bg-white/10 rounded-sm p-6">
              <p
                className="text-white text-center"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Thank you for subscribing! Check your inbox for your 10% discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 bg-white text-[#1A1A1A] placeholder-[#6B6560] text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                  disabled={status === 'loading'}
                />
                {error && (
                  <p className="text-white/90 text-xs mt-2 text-left" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    {error}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-3 bg-[#1A1A1A] text-white text-sm font-medium uppercase tracking-wider hover:bg-[#2a2a2a] transition-colors disabled:opacity-70"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}

          {/* Privacy Note */}
          <p
            className="text-xs text-white/60 mt-6"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            By subscribing, you agree to receive marketing emails from Velmora. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

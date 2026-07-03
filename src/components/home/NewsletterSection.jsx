import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [ref, isVisible] = useScrollReveal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--velmora-charcoal)' }}>
      <div className="velmora-container">
        <div 
          ref={ref}
          className={`max-w-2xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          {/* Content */}
          <p 
            className="text-xs uppercase tracking-[0.3em] mb-4"
            style={{ color: 'var(--velmora-gold)' }}
          >
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Join the Velmora World
          </h2>
          <p 
            className="text-base mb-8"
            style={{ color: 'var(--velmora-taupe)' }}
          >
            Subscribe for 10% off your first order, early access to new collections,<br className="hidden md:block" />
            and exclusive content.
          </p>

          {/* Form */}
          {status === 'success' ? (
            <div 
              className="flex items-center justify-center gap-3 p-6 animate-fade-in"
              style={{ backgroundColor: 'rgba(74, 124, 89, 0.2)' }}
            >
              <Check size={24} style={{ color: 'var(--velmora-gold)' }} />
              <p className="text-white">
                Welcome to Velmora! Check your inbox for your 10% off code.
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
                className="flex-1 px-5 py-4 text-sm bg-transparent border text-white placeholder:text-[var(--velmora-taupe)] focus:outline-none focus:border-[var(--velmora-gold)] transition-colors"
                style={{ borderColor: 'rgba(255,255,255,0.2)' }}
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                className="px-8 py-4 text-sm uppercase tracking-widest font-medium transition-all hover:bg-[var(--velmora-gold)] flex items-center justify-center gap-2 disabled:opacity-50"
                style={{ 
                  backgroundColor: 'var(--velmora-gold)',
                  color: 'white'
                }}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  'Joining...'
                ) : (
                  <>
                    Subscribe
                    <ArrowRight size={16} strokeWidth={1.5} />
                  </>
                )}
              </button>
            </form>
          )}

          <p className="mt-6 text-xs" style={{ color: 'var(--velmora-taupe)' }}>
            By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

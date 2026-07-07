import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Newsletter({ variant = 'accent' }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  const isAccent = variant === 'accent';

  return (
    <section className={isAccent ? 'bg-accent text-accent-foreground' : 'bg-muted text-foreground'}>
      <div className="mx-auto px-5 md:px-8 lg:px-12 py-14 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-3">
            Join for 10% Off
          </h2>
          <p className={`text-sm md:text-base mb-8 ${isAccent ? 'text-accent-foreground/80' : 'text-muted-foreground'}`}>
            Be the first to know about new arrivals, exclusive edits, and styling notes — plus enjoy 10% off your first order.
          </p>

          {status === 'success' ? (
            <p className="font-serif text-lg">Thank you. Your discount is on its way.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={cn(
                  'flex-1 px-4 py-3.5 text-sm bg-transparent border placeholder:text-current/50 focus:outline-none focus:ring-1 focus:ring-current',
                  isAccent
                    ? 'border-accent-foreground/30 text-accent-foreground'
                    : 'border-border-strong text-foreground'
                )}
              />
              <button
                type="submit"
                className={cn(
                  'inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-medium transition-colors',
                  isAccent
                    ? 'bg-foreground text-background hover:bg-foreground/90'
                    : 'bg-foreground text-background hover:bg-foreground/90'
                )}
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

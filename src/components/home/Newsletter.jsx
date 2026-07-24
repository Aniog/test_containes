import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="card-surface overflow-hidden">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="p-8 md:p-12">
              <p className="eyebrow">Stay in the loop</p>
              <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
                Join for 10% off your first order
              </h2>
              <p className="mt-3 font-body text-sm text-ink-secondary">
                Early access to new drops, styling notes, and exclusive offers. No spam, just
                beautiful things.
              </p>

              {submitted ? (
                <p className="mt-6 font-ui text-sm font-semibold text-accent">
                  Welcome to the Velmora circle. Check your inbox for your code.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 rounded-full border border-border bg-surface px-4 py-3 font-ui text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent-soft"
                  />
                  <Button type="submit" className="whitespace-nowrap">
                    Subscribe
                  </Button>
                </form>
              )}
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&w=1200&q=80"
                alt="Newsletter"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

import React, { useState } from 'react';
import Button from '@/components/ui/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) return;
    setDone(true);
  }

  return (
    <section className="bg-espresso text-cream py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold-soft font-sans">
          The List
        </p>
        <h2 className="mt-4 font-serif font-light text-cream text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
          Join for 10% off
          <br />
          your first order.
        </h2>
        <p className="mt-6 text-cream/80 max-w-lg mx-auto font-sans text-base leading-relaxed">
          Quiet emails — new arrivals, atelier notes, and the occasional gift
          worth knowing about.
        </p>

        {done ? (
          <div className="mt-10">
            <p className="font-serif text-2xl text-gold-soft">
              Welcome to Velmora.
            </p>
            <p className="mt-3 text-sm text-cream/80 font-sans">
              Your code is on its way to {email}.
            </p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-10 flex flex-col sm:flex-row items-stretch gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-label="Email address"
              className="flex-1 bg-transparent border border-espresso-soft focus:border-gold-soft outline-none px-5 py-3.5 text-sm text-cream placeholder:text-mute font-sans transition-colors"
            />
            <Button type="submit" variant="primary" size="md" className="sm:px-8">
              Subscribe
            </Button>
          </form>
        )}

        <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-mute font-sans">
          By subscribing, you agree to our privacy policy.
        </p>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="bg-ink text-ivory">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
              Join the Circle
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] text-ivory">
              10% off your<br />
              <span className="italic">first piece.</span>
            </h2>
            <p className="mt-5 text-ivory/70 max-w-md leading-relaxed">
              Early access to new collections, editorial notes, and the occasional
              private sale. No spam, ever.
            </p>
          </div>

          <div className="md:col-span-6 md:pl-8">
            {submitted ? (
              <div className="flex items-center gap-3 py-6 border-b border-ivory/30">
                <Check className="w-5 h-5 text-gold" strokeWidth={1.4} />
                <p className="text-sm text-ivory">
                  Welcome to Velmora. Your code is on its way.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:items-end border-b border-ivory/30 focus-within:border-gold transition-colors duration-300 pb-2">
                  <label htmlFor="velmora-newsletter" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="velmora-newsletter"
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent text-ivory placeholder:text-ivory/40 py-3 outline-none text-base"
                  />
                  <button
                    type="submit"
                    className="bg-gold text-ink px-7 py-3 text-xs tracking-[0.3em] uppercase font-medium hover:bg-ivory transition-colors duration-300"
                  >
                    Sign Up
                  </button>
                </div>
                {error && (
                  <p className="text-xs text-gold" role="alert">
                    {error}
                  </p>
                )}
                <p className="text-[11px] text-ivory/50 leading-relaxed">
                  By signing up, you agree to receive marketing emails from Velmora.
                  Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

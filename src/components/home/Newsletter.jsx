import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="py-20 md:py-32 bg-[var(--color-gold)]">
      <div className="container-main">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white tracking-wide">
            Join for 10% Off
          </h2>
          <p className="mt-4 text-white/80 font-sans">
            Subscribe to our newsletter and receive 10% off your first order
          </p>

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-3 bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors duration-200"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[var(--color-charcoal)] text-white font-sans font-medium tracking-wide hover:bg-[var(--color-warm-black)] transition-colors duration-200"
              >
                Subscribe
              </button>
            </div>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-white font-medium animate-fade-in">
              Thank you for subscribing!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

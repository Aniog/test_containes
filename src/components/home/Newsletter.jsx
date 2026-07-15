import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="bg-velmora-cream px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1600px] bg-velmora-gold px-6 py-14 md:px-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-white md:text-4xl">
            Join for 10% Off Your First Order
          </h2>
          <p className="mt-4 font-sans font-light text-white/90">
            Be the first to know about new collections, exclusive offers, and styling inspiration.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 border-b-2 border-white/40 bg-transparent px-4 py-3.5 font-sans text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-velmora-charcoal px-8 py-3.5 font-sans text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-velmora-charcoal-soft"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
          {status === 'success' && (
            <p className="mt-4 text-sm font-medium text-white">
              Welcome — your code is on its way.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

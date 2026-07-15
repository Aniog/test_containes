import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="bg-velmora-porcelain py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-velmora-gold px-6 py-14 sm:px-16 sm:py-20">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/80">
              The Velmora List
            </p>
            <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">
              Join for 10% Off Your First Order
            </h2>
            <p className="mt-4 text-sm text-white/80">
              Be the first to know about new arrivals, exclusive offers, and
              styling inspiration.
            </p>

            {submitted ? (
              <div className="mt-8 inline-flex items-center gap-2 rounded bg-white/20 px-6 py-3 text-white backdrop-blur-sm">
                <Check size={18} />
                <span className="text-sm font-medium">
                  You're on the list — welcome.
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 border-b-2 border-white/40 bg-transparent px-0 py-3 text-sm text-white placeholder-white/60 outline-none transition-colors focus:border-white"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-velmora-ink px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-velmora-charcoal"
                >
                  Subscribe <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

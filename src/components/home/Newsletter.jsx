import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-velmora-black py-20 md:py-24">
      <div className="max-w-[1440px] mx-auto section-pad">
        <div className="max-w-lg mx-auto text-center">
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-velmora-gold mb-4">
            Stay in Touch
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-ivory tracking-[0.03em] mb-3">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-sm text-velmora-stone mb-8">
            Be the first to discover new collections, exclusive offers, and styling inspiration.
          </p>

          {submitted ? (
            <p className="text-sm text-velmora-gold animate-fade-in">
              Thank you — welcome to Velmora.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-white/5 border border-white/15 text-velmora-ivory placeholder:text-velmora-stone/50 px-5 py-3.5 text-sm font-sans outline-none focus:border-velmora-gold/50 transition-colors"
              />
              <button
                type="submit"
                className="btn-gold border-none flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
          <p className="text-[11px] text-velmora-stone/50 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

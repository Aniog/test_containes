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
    <section className="bg-gold">
      <div className="container-main py-16 md:py-20">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-white/70 mb-3">
            Stay in Touch
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-light mb-3">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-white/80 text-sm mb-8 leading-relaxed">
            Be the first to discover new arrivals, exclusive offers, and styling inspiration.
          </p>

          {submitted ? (
            <div className="bg-white/10 rounded-sm py-4 px-6">
              <p className="text-white font-medium text-sm">
                Welcome to the Velmora family. Check your inbox for your 10% off code.
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
                className="flex-1 px-5 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm rounded-sm focus:outline-none focus:border-white/60 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-charcoal text-white text-sm tracking-wide uppercase font-medium hover:bg-charcoal/90 transition-colors rounded-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-white/40 text-xs mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

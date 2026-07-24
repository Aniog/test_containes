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
    <section className="py-16 md:py-24 bg-velvet-950">
      <div className="container-wide section-padding">
        <div className="max-w-lg mx-auto text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-warm-400 mb-4">
            Join the Inner Circle
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-light tracking-wide mb-4">
            10% Off Your First Order
          </h2>
          <p className="text-sand-400 text-sm leading-relaxed mb-8">
            Sign up for early access to new collections, exclusive offers, and styling inspiration — delivered with the same care we put into every piece.
          </p>

          {submitted ? (
            <div className="animate-fade-in">
              <p className="font-serif text-xl text-warm-400 mb-2">Welcome to Velmora.</p>
              <p className="text-sand-400 text-sm">Check your inbox for your 10% off code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-sand-500 px-4 py-3 text-sm font-sans outline-none focus:border-velvet-500 transition-colors"
              />
              <button type="submit" className="btn-primary text-xs whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

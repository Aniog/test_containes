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
    <section className="bg-warm-100/60">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-[560px] mx-auto text-center">
          <p className="font-sans text-[11px] tracking-widest3 uppercase text-warm-600 mb-4">
            The Velmora List
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal-900 mb-4">
            Join for 10% off your first order
          </h2>
          <p className="text-charcoal-500 mb-8 leading-relaxed">
            Sign up for early access to new collections, exclusive offers, and styling inspiration — delivered with the same care we put into every piece.
          </p>

          {submitted ? (
            <p className="font-serif text-lg text-warm-700 italic">
              Welcome to the family. Check your inbox for your 10% code.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[420px] mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-3.5 bg-white border border-charcoal-200 text-sm text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:border-charcoal-500 transition-colors"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}

          <p className="text-[11px] text-charcoal-400 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

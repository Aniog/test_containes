import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="section-padding py-16 md:py-24">
      <div className="max-w-2xl mx-auto bg-velmora-rose/20 px-8 md:px-16 py-14 md:py-20 text-center">
        <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-velmora-ink mb-4">
          Join for 10% Off
        </h2>
        <p className="text-velmora-stone text-sm mb-8 max-w-sm mx-auto">
          Your first order. Plus, early access to new collections
          and exclusive member-only pieces.
        </p>

        {submitted ? (
          <p className="text-velmora-gold text-sm font-medium">
            Thank you! Check your inbox for your discount code.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 bg-white border border-velmora-sand/50 text-sm text-velmora-ink placeholder:text-velmora-stone/50 focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Get 10% Off
            </button>
          </form>
        )}

        <p className="text-[11px] text-velmora-stone/60 mt-4">
          No spam — unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
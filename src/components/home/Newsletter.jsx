import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-espresso text-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-champagne mb-4">
          Join Velmora
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ivory">
          10% Off Your First Order
        </h2>
        <p className="mt-4 text-sm text-ivory/70 max-w-md mx-auto">
          Be first to know about new collections, private sales, and styling
          notes. Plus, enjoy 10% off your first order.
        </p>

        {submitted ? (
          <p className="mt-8 font-serif text-2xl text-gold">
            Thank you — check your inbox for your code.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-ivory/30 text-ivory placeholder:text-ivory/40 px-5 py-4 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gold text-ivory uppercase tracking-[0.18em] text-xs hover:bg-gold-deep transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
        <p className="mt-4 text-[11px] text-ivory/40">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  );
}

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-obsidian py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="font-sans text-xs uppercase tracking-widest text-gold mb-4">
          Join the Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-ivory font-light mb-4">
          10% off your first order
        </h2>
        <p className="font-sans text-sm text-taupe-light leading-relaxed mb-8">
          Subscribe for early access to new collections, styling inspiration, and exclusive member offers.
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-serif text-xl text-gold italic">
              Welcome to Velmora. ✦
            </p>
            <p className="font-sans text-xs text-taupe-light mt-2">
              Your 10% discount code is on its way to your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-obsidian-soft border border-obsidian-soft text-ivory placeholder-taupe font-sans text-sm px-5 py-4 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-obsidian font-sans text-xs uppercase tracking-widest px-8 py-4 hover:bg-gold-light transition-colors whitespace-nowrap border-0"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="font-sans text-[10px] text-taupe mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

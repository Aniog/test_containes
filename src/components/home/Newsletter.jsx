import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 md:py-20 bg-[#B8966A]">
      <div className="max-w-xl mx-auto px-5 md:px-8 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-white tracking-wide mb-3">
          Join the Inner Circle
        </h2>
        <p className="text-sm text-white/80 mb-8">
          Subscribe for 10% off your first order, early access to new drops, and
          styling inspiration.
        </p>

        {submitted ? (
          <p className="text-white text-sm font-medium">
            Thank you! Check your inbox for your welcome gift.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border border-white/30 rounded px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="bg-white text-[#1A1816] text-xs tracking-[0.14em] uppercase font-medium px-7 py-3 rounded hover:bg-white/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

import { useState } from "react";
import { Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-forest">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-10 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-luxe text-gold-light">
          The Velmora List
        </p>
        <h2 className="mt-4 font-serif text-3xl font-medium text-ivory md:text-5xl">
          Join for <span className="italic text-gold-light">10% off</span> your
          first order
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-sand/80">
          New arrivals, styling notes, and early access to limited pieces —
          straight to your inbox.
        </p>

        {submitted ? (
          <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 border border-gold/40 bg-gold/10 px-6 py-4 text-sm text-gold-light">
            <Check className="h-4 w-4" strokeWidth={2} />
            Welcome to the list — your code is on its way.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 border border-sand/30 bg-transparent px-5 py-4 text-sm text-ivory placeholder:text-sand/50 focus:border-gold-light focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-luxe text-ivory transition-colors hover:bg-gold-dark"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

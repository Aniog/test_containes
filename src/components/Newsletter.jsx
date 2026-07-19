import { useState } from "react";
import { toast } from "sonner";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubmitting(true);
    // Simulated — backend wiring would call a real subscribe endpoint.
    setTimeout(() => {
      toast.success("Welcome — your 10% code is on its way.");
      setEmail("");
      setSubmitting(false);
    }, 500);
  }

  return (
    <section className="bg-espresso text-ivory">
      <div className="mx-auto max-w-7.5xl px-6 sm:px-10 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-[10px] uppercase tracking-wider-3 text-gold-soft">
            The Velmora Circle
          </p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-ivory">
            Join for 10% off your first order
          </h2>
          <p className="mt-4 font-sans text-sm leading-relaxed text-ivory/75">
            Early access to new pieces, private events, and quiet dispatches from the atelier.
          </p>
          <form
            onSubmit={onSubmit}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              autoComplete="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-b border-line-dark bg-transparent px-4 py-4 font-sans text-sm text-ivory placeholder:text-stone focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center bg-gold px-8 py-4 font-sans text-[11px] uppercase tracking-wider-2 text-espresso transition-colors hover:bg-gold-soft disabled:opacity-60 sm:rounded-none"
            >
              {submitting ? "Joining…" : "Subscribe"}
            </button>
          </form>
          <p className="mt-4 font-sans text-[11px] text-stone">
            By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Gift } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const value = email.trim();
    if (!/^\S+@\S+\.\S+$/.test(value)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }
    setError("");
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 700);
  };

  return (
    <section className="bg-gold-soft py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-cream">
            <Gift className="h-6 w-6 text-gold" />
          </span>
          <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-gold-deep">
            The Velmora List
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium text-ink md:text-5xl">
            Join for <em className="italic">10% off</em> your first order
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-espresso">
            Early access to new pieces, private offers, and stories from the
            atelier. One beautiful email a week, never more.
          </p>

          {status === "success" ? (
            <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 border border-gold/40 bg-cream px-6 py-5">
              <CheckCircle2 className="h-5 w-5 text-gold" />
              <p className="text-sm text-espresso">
                Welcome to the list — your code{" "}
                <span className="font-semibold tracking-widest text-gold-deep">
                  TREASURE10
                </span>{" "}
                is on its way.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              noValidate
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="h-14 flex-1 border border-gold/40 bg-cream px-5 text-sm text-ink outline-none transition-colors placeholder:text-taupe focus:border-gold"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex h-14 items-center justify-center gap-2 bg-ink px-8 text-[11px] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-gold disabled:opacity-70"
              >
                {status === "submitting" ? "Joining…" : "Join"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm text-gold-deep" role="alert">
              {error}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

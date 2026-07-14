import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setStatus("submitting");
    // Simulated signup — wire to your real ESP later.
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 600);
  };

  return (
    <section className="bg-ink text-bone">
      <div className="container-editorial py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6">
            <p className="eyebrow text-gold-soft">Join the list</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl font-light leading-[1.05] text-balance">
              <span className="italic text-gold-soft">10% off</span> your
              first order.
            </h2>
            <p className="mt-4 font-sans text-sm text-bone/70 max-w-md">
              Be the first to know about new collections, edits, and the
              occasional studio secret. No spam — just jewelry.
            </p>
          </div>
          <div className="md:col-span-6">
            <form
              onSubmit={onSubmit}
              className="flex flex-col sm:flex-row gap-3"
              noValidate
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-invalid={status === "error" || Boolean(error)}
                aria-describedby="newsletter-help"
                className="flex-1 bg-transparent border border-hairline-dark px-5 py-3.5 font-sans text-sm text-bone placeholder:text-bone/40 focus:border-gold focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-bone text-ink font-sans text-[11px] uppercase tracking-editorial font-medium hover:bg-gold hover:text-ink transition-colors duration-500 disabled:opacity-60"
              >
                {status === "success" ? (
                  <>
                    <Check className="w-3.5 h-3.5" strokeWidth={1.5} />
                    Subscribed
                  </>
                ) : status === "submitting" ? (
                  "Joining…"
                ) : (
                  <>
                    Join
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </>
                )}
              </button>
            </form>
            <p
              id="newsletter-help"
              className="mt-3 text-[11px] font-sans text-bone/50"
              role="status"
            >
              {error ||
                (status === "success"
                  ? "Welcome to Velmora — check your inbox for your code."
                  : "By subscribing you agree to receive marketing emails. Unsubscribe anytime.")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

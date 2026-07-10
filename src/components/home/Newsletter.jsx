import React, { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      setStatus("error");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    // Simulate a network call — replace with real subscription API later.
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="bg-claret text-ivory-light">
      <div className="mx-auto max-w-wide px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-gold-soft mb-5">
              The inner circle
            </p>
            <h2
              id="newsletter-headline"
              className="serif-display text-3xl md:text-5xl lg:text-[56px] leading-[1.05]"
            >
              Join for <em className="italic font-light">10% off</em> your first order.
            </h2>
            <p
              id="newsletter-sub"
              className="mt-5 text-sm md:text-base text-ivory/80 leading-relaxed max-w-md"
            >
              Early access to new collections, atelier stories, and a small thank-you for being part of the journey.
            </p>
          </div>

          <div className="lg:col-span-5">
            <form onSubmit={onSubmit} className="w-full" noValidate>
              <div className="flex flex-col sm:flex-row gap-3">
                <label className="sr-only" htmlFor="newsletter-email">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="Your email address"
                  className={cn(
                    "flex-1 bg-transparent border border-ivory/40 px-5 py-4 text-sm text-ivory-light placeholder:text-ivory/60 focus:outline-none focus:border-ivory-light transition-colors duration-300"
                  )}
                  aria-invalid={status === "error"}
                  aria-describedby="newsletter-message"
                  required
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="bg-ivory-light text-claret hover:bg-ivory px-8 py-4 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ease-editorial disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending…" : "Subscribe"}
                </button>
              </div>
              <p id="newsletter-message" className="mt-4 text-xs min-h-[1.25rem]" role="status">
                {status === "success" && (
                  <span className="inline-flex items-center gap-2 text-gold-soft">
                    <Check className="h-3.5 w-3.5" strokeWidth={1.75} />
                    Welcome — check your inbox for your code.
                  </span>
                )}
                {status === "error" && (
                  <span className="text-ivory/90">{error}</span>
                )}
                {status === "idle" && (
                  <span className="text-ivory/60">By subscribing you agree to receive marketing emails. Unsubscribe anytime.</span>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { useStrkImage } from "@/hooks/useStrkImage";
import { useRef } from "react";

export default function Newsletter() {
  const ref = useRef(null);
  useStrkImage(ref, []);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    // Simulated network; in production this would hit a real endpoint.
    window.setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 700);
  };

  return (
    <section
      ref={ref}
      className="relative bg-espresso text-cream overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-25"
        data-strk-bg-id="newsletter-bg-4f7c11"
        data-strk-bg="close up of gold jewelry texture on dark background, abstract"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="relative mx-auto max-w-screen-2xl px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-[11px] md:text-xs uppercase tracking-eyebrow text-champagne-soft">
            The Letter
          </span>
          <h2 className="mt-4 font-serif font-light text-4xl md:text-5xl leading-[1.08] tracking-tight">
            Join for <em className="italic">10% off</em> your first order.
          </h2>
          <p className="mt-5 text-sm md:text-base text-cream/75 leading-relaxed max-w-md mx-auto">
            Quiet, considered emails — new collections, restocks, and the
            occasional studio story. Unsubscribe anytime.
          </p>

          <form
            onSubmit={onSubmit}
            className="mt-9 flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
            noValidate
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error" || status === "success") setStatus("idle");
              }}
              placeholder="your@email.com"
              className="flex-1 bg-transparent border border-cream/30 px-4 py-3.5 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-champagne transition-colors duration-300"
            />
            <button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              className="inline-flex items-center justify-center gap-2 bg-champagne text-espresso px-6 py-3.5 text-xs uppercase tracking-label font-medium hover:bg-champagne-deep transition-colors duration-500 ease-elegant disabled:opacity-70"
            >
              {status === "success" ? (
                <>
                  <Check className="h-3.5 w-3.5" strokeWidth={1.8} />
                  Subscribed
                </>
              ) : status === "submitting" ? (
                "Subscribing…"
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.6} />
                </>
              )}
            </button>
          </form>
          <p
            className={`mt-4 text-[11px] uppercase tracking-eyebrow min-h-[1em] ${
              status === "error" ? "text-champagne-soft" : "text-cream/45"
            }`}
            aria-live="polite"
          >
            {status === "error"
              ? "Please enter a valid email address"
              : status === "success"
                ? "Welcome — check your inbox for your code"
                : "By subscribing you agree to our terms"}
          </p>
        </div>
      </div>
    </section>
  );
}

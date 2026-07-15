import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/cn";

export default function Newsletter({ variant = "ink" }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const isInk = variant === "ink";
  return (
    <section
      className={cn(
        "py-20 md:py-28",
        isInk ? "bg-ink text-ivory" : "bg-cream text-ink"
      )}
    >
      <div className="container-editorial">
        <div className="max-w-2xl mx-auto text-center">
          <p
            className={cn(
              "eyebrow",
              isInk ? "text-gold-soft" : "text-gold-deep"
            )}
          >
            The Velmora Letter
          </p>
          <h2
            className={cn(
              "mt-4 font-serif font-light text-3xl md:text-5xl leading-tight",
              isInk ? "text-ivory" : "text-ink"
            )}
          >
            Join for{" "}
            <em className="italic font-normal text-gold">10% off</em> your
            first order
          </h2>
          <p
            className={cn(
              "mt-4 text-[15px] leading-relaxed",
              isInk ? "text-ivory/70" : "text-mauve"
            )}
          >
            Early access to new pieces, restocks, and a private invitation to
            our seasonal lookbook. No spam — just jewelry, gently.
          </p>
          {submitted ? (
            <div
              className={cn(
                "mt-8 inline-flex items-center gap-3 px-6 py-4 border",
                isInk
                  ? "border-gold-soft/50 text-ivory"
                  : "border-ink/20 text-ink"
              )}
              role="status"
            >
              <Check size={16} strokeWidth={1.6} className="text-gold" />
              <span className="text-sm">
                Welcome to the letter. Your code is on its way.
              </span>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-8 flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0 max-w-md mx-auto"
              noValidate
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className={cn(
                  "flex-1 h-12 px-4 text-sm bg-transparent border",
                  "focus:outline-none focus:ring-2 focus:ring-gold/40",
                  isInk
                    ? "border-ivory/30 text-ivory placeholder:text-ivory/50"
                    : "border-ink/30 text-ink placeholder:text-stone"
                )}
              />
              <button
                type="submit"
                className={cn(
                  "inline-flex items-center justify-center gap-2 h-12 px-6",
                  "text-[12px] uppercase tracking-nav font-medium",
                  "transition-colors duration-300",
                  isInk
                    ? "bg-ivory text-ink hover:bg-gold hover:text-ivory"
                    : "bg-ink text-ivory hover:bg-gold-deep"
                )}
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={1.6} />
              </button>
            </form>
          )}
          {error && (
            <p className="mt-3 text-xs text-claret" role="alert">
              {error}
            </p>
          )}
          <p
            className={cn(
              "mt-6 text-[11px] uppercase tracking-eyebrow",
              isInk ? "text-ivory/50" : "text-stone"
            )}
          >
            By subscribing you agree to receive marketing email from Velmora.
          </p>
        </div>
      </div>
    </section>
  );
}
